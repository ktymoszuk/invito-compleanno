<template>
  <div>
    <div ref="canvasContainer" class="room-container"></div>

    <Transition name="welcome">
      <section v-if="showWelcome" class="welcome-screen" aria-labelledby="welcome-title">
        <div class="welcome-content">
          <p class="welcome-eyebrow">'66 CELEBRATION</p>
          <h1 id="welcome-title">UN INVITO<br />PER TE</h1>

          <div class="explore-globe" aria-hidden="true">
            <span class="globe-ring globe-ring-horizontal"></span>
            <span class="globe-ring globe-ring-vertical"></span>
            <span class="globe-core material-symbols-rounded">open_with</span>
          </div>

          <p class="welcome-hint">Entra ed interagisci con gli oggetti</p>
          <button type="button" class="welcome-button" @click="enterParty">
            Entra nella festa
            <span class="material-symbols-rounded">arrow_forward</span>
          </button>
        </div>
      </section>
    </Transition>

    <aside
      v-if="hasEntered"
      class="music-player"
      :class="{ minimized: isMusicPlayerMinimized }"
      aria-label="Controlli musica"
      @pointerdown.capture="wakeMusicPlayer"
      @focusin="wakeMusicPlayer"
    >
      <a
        class="album-link"
        href="https://open.spotify.com/intl-it/track/2C1cH4RmDkUBuFGVZN8T10?si=ef9c2b271c124b8d"
        target="_blank"
        rel="noopener noreferrer"
        title="Apri Bacio che schiocca su Spotify"
        aria-label="Apri Bacio che schiocca su Spotify"
      >
        <img :src="'/images/bacio_che_schiocca.png'" alt="Copertina di Bacio che schiocca" />
        <img class="spotify-badge" :src="'/images/spotify.webp'" alt="" aria-hidden="true" />
      </a>
      <div class="track-info">
        <strong>Bacio che schiocca</strong>
        <span>Marco Rossi</span>
      </div>
      <button
        type="button"
        class="player-control"
        :title="isMusicPlaying ? 'Pausa' : 'Riproduci'"
        :aria-label="isMusicPlaying ? 'Metti in pausa' : 'Riproduci'"
        @click="toggleMusic"
      >
        <span class="material-symbols-rounded">{{ isMusicPlaying ? 'pause' : 'play_arrow' }}</span>
      </button>
      <label class="volume-control">
        <span class="material-symbols-rounded" aria-hidden="true">{{ musicVolume === 0 ? 'volume_off' : 'volume_up' }}</span>
        <input
          v-model.number="musicVolume"
          type="range"
          min="0"
          max="100"
          step="1"
          aria-label="Volume musica"
          :style="{ '--volume-level': `${musicVolume}%` }"
          @input="changeMusicVolume"
        />
        <output>{{ musicVolume }}%</output>
      </label>
    </aside>

    <button
      id="info-btn"
      class="party-btn"
      @click="openDrawer"
      :style="{ opacity: isOpen ? '0' : '1', pointerEvents: isOpen ? 'none' : 'auto' }"
    >
      INFO FESTA
    </button>

    <section id="info-drawer" class="drawer" :class="{ open: isOpen }" aria-label="Dettagli festa">
      <div class="drawer-content">
        <button id="close-btn" class="icon-button close-btn" title="Chiudi" aria-label="Chiudi" @click="closeDrawer">
          <span class="material-symbols-rounded">close</span>
        </button>

        <div class="drawer-body">
          <div v-if="activeSection === 'info'">
            <p class="eyebrow" style="font-size: 1.2rem; margin: 0;">'66 CELEBRATION</p>
            <h2 class="panel-title">INGRESSO LIBERO</h2>
            <p class="subtitle" style="font-size: 1.2rem; margin-top: 0;">Massimo 300 ingressi</p>

            <div class="info-grid">
              <div class="info-item">
                <span class="material-symbols-rounded">calendar_month</span>
                <div><small>DATA E ORA</small><strong>30 ottobre 2026 · 21:30</strong></div>
              </div>
              <div class="info-item">
                <span class="material-symbols-rounded">location_on</span>
                <div><small>LUOGO</small><strong>TOTEM · Via Vecchia Ferriera, 135, Vicenza</strong></div>
              </div>
            </div>
            <button class="primary-button" @click="selectSection('register')">Conferma la presenza</button>
          </div>

          <div v-else-if="activeSection === 'register'" class="form-section">
            <p class="eyebrow">REGISTRAZIONE</p>
            <h2 class="panel-title">Lascia i tuoi dati</h2>
            <p class="subtitle">la presenza sarà confermata dall'organizzatore.</p>

            <div v-if="showSuccess" class="status-panel success-section">
              <span class="material-symbols-rounded">check_circle</span>
              <strong>Richiesta inviata</strong>
              <p>Registrazione avvenuta con successo. Ci vediamo in pista, {{ registeredFirstName }}.</p>
            </div>
            <p v-if="showSuccess" class="add-person-hint">Aggiungi un altra persona</p>

            <form @submit.prevent="submitRsvp">
              <label class="input-group">
                <span>Nome</span>
                <input v-model.trim="firstName" maxlength="50" autocomplete="given-name" required class="input-field" />
              </label>
              <label class="input-group">
                <span>Cognome</span>
                <input v-model.trim="lastName" maxlength="50" autocomplete="family-name" required class="input-field" />
              </label>
              <label class="input-group">
                <span>Invitato da</span>
                <input v-model.trim="invitedBy" maxlength="100" required class="input-field" />
              </label>
              <p v-if="formError" class="error-message">{{ formError }}</p>
              <button class="primary-button" type="submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Invio in corso...' : 'Invia richiesta' }}
              </button>
            </form>

            <button class="guest-list-button" type="button" @click="selectSection('guests')">
              <span class="material-symbols-rounded">groups</span>
              Lista invitati
            </button>
          </div>

          <div v-else-if="activeSection === 'guests'">
            <p class="eyebrow">GUEST LIST</p>
            <div class="section-heading">
              <div>
                <h2 class="panel-title">{{ isAdminAuthenticated ? 'Gestione invitati' : 'Lista invitati' }}</h2>
                <p class="subtitle">
                  {{ isAdminAuthenticated ? 'Controlla e aggiorna tutte le richieste.' : 'Le presenze già confermate.' }}
                </p>
              </div>
              <button v-if="isAdminAuthenticated" class="icon-button logout-button" title="Esci" aria-label="Esci" @click="logout">
                <span class="material-symbols-rounded">logout</span>
              </button>
            </div>

            <div class="guest-filters">
              <label class="filter-field search-field">
                <span class="material-symbols-rounded">search</span>
                <input v-model.trim="guestSearch" type="search" placeholder="Cerca nome o cognome" aria-label="Cerca invitato" />
              </label>
              <div v-if="isAdminAuthenticated" class="state-filter" role="group" aria-label="Filtra per stato">
                <button
                  v-for="filter in statusFilters"
                  :key="filter.value"
                  type="button"
                  class="state-filter-button"
                  :class="[{ active: statusFilter === filter.value }, `filter-${filter.value}`]"
                  :title="filter.label"
                  :aria-label="filter.label"
                  :aria-pressed="statusFilter === filter.value"
                  @click="statusFilter = filter.value"
                >
                  <span class="material-symbols-rounded">{{ filter.icon }}</span>
                </button>
              </div>
            </div>

            <div v-if="isLoadingGuests" class="empty-state">Caricamento...</div>
            <div v-else-if="filteredGuests.length === 0" class="empty-state">
              {{ guests.length > 0 ? 'Nessun invitato corrisponde ai filtri.' : (isAdminAuthenticated ? 'Non ci sono ancora richieste.' : 'Nessun invitato ancora confermato.') }}
            </div>
            <ul v-else class="guest-list">
              <li v-for="guest in filteredGuests" :key="guest.id">
                <span
                  class="material-symbols-rounded guest-status-icon"
                  :class="`guest-status-${guest.approved ?? 1}`"
                  :title="statusLabel(guest.approved ?? 1)"
                >person</span>
                <div class="guest-details">
                  <strong>{{ guest.nome }} {{ guest.cognome }}</strong>
                  <small v-if="isAdminAuthenticated">Invitato da {{ guest.invitato_da }}</small>
                </div>
                <div
                  v-if="isAdminAuthenticated"
                  class="status-control"
                  role="group"
                  :aria-label="`Stato invito di ${guest.nome} ${guest.cognome}`"
                >
                  <button
                    v-for="status in availableStatusActions(guest.approved)"
                    :key="status.value"
                    type="button"
                    class="status-button"
                    :class="`status-${status.value}`"
                    :disabled="updatingGuestId === guest.id"
                    :title="status.label"
                    :aria-label="`${status.label}: ${guest.nome} ${guest.cognome}`"
                    @click="updateGuestStatus(guest, status.value)"
                  >
                    <span
                      v-if="updatingGuestId === guest.id && updatingGuestStatus === status.value"
                      class="status-loader"
                      aria-hidden="true"
                    ></span>
                    <span v-else class="material-symbols-rounded">{{ status.icon }}</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div v-else class="reserved-section">
            <span class="material-symbols-rounded lock-icon">admin_panel_settings</span>
            <p class="eyebrow">AREA RISERVATA</p>
            
            <p class="subtitle">Accedi per gestire le richieste degli invitati.</p>
            <form class="login-form" @submit.prevent="login">
              <label class="input-group">
                <span>Email</span>
                <input v-model.trim="loginEmail" type="email" autocomplete="username" required class="input-field" />
              </label>
              <label class="input-group">
                <span>Password</span>
                <input v-model="loginPassword" type="password" autocomplete="current-password" required class="input-field" />
              </label>
              <p v-if="loginError" class="error-message">{{ loginError }}</p>
              <button class="primary-button" type="submit" :disabled="isLoggingIn">
                {{ isLoggingIn ? 'Accesso...' : 'Accedi' }}
              </button>
            </form>
          </div>
        </div>

        <nav class="bottom-nav" aria-label="Navigazione pannello">
          <button
            v-for="item in navigationItems"
            :key="item.id"
            class="nav-button"
            :class="{ active: activeSection === item.id }"
            :title="item.label"
            :aria-label="item.label"
            @click="selectSection(item.id)"
          >
            <span class="material-symbols-rounded">{{ item.icon }}</span>
          </button>
        </nav>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { RoomEngine } from './engine/RoomEngine';

type Section = 'info' | 'register' | 'guests' | 'reserved';
type AuthResponse = { authenticated: boolean; csrf_token: string };
type Guest = {
  id: number;
  nome: string;
  cognome: string;
  invitato_da?: string;
  approved?: 0 | 1 | 2;
};

const canvasContainer = ref<HTMLDivElement | null>(null);
let engine: RoomEngine | null = null;

const showWelcome = ref(true);
const hasEntered = ref(false);
const isMusicPlaying = ref(false);
const isMusicPlayerMinimized = ref(false);
const musicVolume = ref(50);
const isOpen = ref(false);
const activeSection = ref<Section>('info');
const showSuccess = ref(false);
const registeredFirstName = ref('');
const firstName = ref('');
const lastName = ref('');
const invitedBy = ref('');
const formError = ref('');
const isSubmitting = ref(false);
const isLoadingGuests = ref(false);
const guests = ref<Guest[]>([]);
const isAdminAuthenticated = ref(false);
const loginEmail = ref('');
const loginPassword = ref('');
const loginError = ref('');
const isLoggingIn = ref(false);
const updatingGuestId = ref<number | null>(null);
const updatingGuestStatus = ref<1 | 2 | null>(null);
const guestSearch = ref('');
const statusFilter = ref<'all' | '0' | '1' | '2'>('all');
let musicPlayerInactivityTimer: number | null = null;

const navigationItems: Array<{ id: Section; icon: string; label: string }> = [
  { id: 'info', icon: 'info', label: 'Info' },
  { id: 'register', icon: 'person_add', label: 'Registrati' },
  { id: 'guests', icon: 'groups', label: 'Lista invitati' },
  { id: 'reserved', icon: 'lock', label: 'Area riservata' },
];

const invitationStatuses: Array<{ value: 0 | 1 | 2; label: string; icon: string }> = [
  { value: 0, label: 'In attesa', icon: 'hourglass_top' },
  { value: 1, label: 'Confermato', icon: 'check_circle' },
  { value: 2, label: 'Rifiutato', icon: 'cancel' },
];

const editableInvitationStatuses = invitationStatuses.filter(status => status.value !== 0);

const availableStatusActions = (approved: Guest['approved']) => editableInvitationStatuses.filter(status => (
  approved === 0 || status.value !== approved
));

const statusFilters: Array<{ value: 'all' | '0' | '1' | '2'; label: string; icon: string }> = [
  { value: 'all', label: 'Tutti gli stati', icon: 'groups' },
  { value: '0', label: 'In attesa', icon: 'hourglass_top' },
  { value: '1', label: 'Confermati', icon: 'check_circle' },
  { value: '2', label: 'Rifiutati', icon: 'cancel' },
];

const statusLabel = (status: number) => invitationStatuses.find(item => item.value === status)?.label ?? 'Confermato';

const filteredGuests = computed(() => {
  const search = guestSearch.value.toLocaleLowerCase('it');

  return guests.value
    .filter(guest => {
      const fullName = `${guest.nome} ${guest.cognome}`.toLocaleLowerCase('it');
      const matchesSearch = !search || fullName.includes(search);
      const matchesStatus = !isAdminAuthenticated.value
        || statusFilter.value === 'all'
        || guest.approved === Number(statusFilter.value);

      return matchesSearch && matchesStatus;
    })
    .sort((first, second) => {
      if (isAdminAuthenticated.value && first.approved !== second.approved) {
        return (first.approved ?? 0) - (second.approved ?? 0);
      }

      return `${first.nome} ${first.cognome}`.localeCompare(`${second.nome} ${second.cognome}`, 'it');
    });
});

const openDrawer = () => {
  isOpen.value = true;
};

const scheduleMusicPlayerMinimize = () => {
  if (musicPlayerInactivityTimer !== null) window.clearTimeout(musicPlayerInactivityTimer);
  musicPlayerInactivityTimer = window.setTimeout(() => {
    isMusicPlayerMinimized.value = true;
    musicPlayerInactivityTimer = null;
  }, 5000);
};

const wakeMusicPlayer = () => {
  isMusicPlayerMinimized.value = false;
  scheduleMusicPlayerMinimize();
};

const enterParty = () => {
  showWelcome.value = false;
  hasEntered.value = true;
  scheduleMusicPlayerMinimize();
  void engine?.startMusicWithFade();
};

const toggleMusic = () => {
  engine?.toggleMusic();
};

const changeMusicVolume = () => {
  engine?.setMusicVolume(musicVolume.value / 100);
};

const closeDrawer = () => {
  isOpen.value = false;
  setTimeout(() => {
    activeSection.value = 'info';
    showSuccess.value = false;
  }, 300);
};

const loadGuests = async () => {
  isLoadingGuests.value = true;
  try {
    const endpoint = isAdminAuthenticated.value ? '/area-riservata/invitati' : '/invitati';
    const response = await axios.get<Guest[]>(endpoint);
    guests.value = response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      isAdminAuthenticated.value = false;
      activeSection.value = 'reserved';
    }
  } finally {
    isLoadingGuests.value = false;
  }
};

const syncCsrfToken = (csrfToken: string) => {
  const csrfMeta = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]');
  if (csrfMeta) csrfMeta.content = csrfToken;
};

const selectSection = async (section: Section) => {
  if (section === 'reserved') {
    const response = await axios.get<AuthResponse>('/area-riservata/status');
    isAdminAuthenticated.value = response.data.authenticated;
    syncCsrfToken(response.data.csrf_token);

    if (isAdminAuthenticated.value) {
      activeSection.value = 'guests';
      await loadGuests();
      return;
    }
  }

  activeSection.value = section;
  if (section === 'guests') await loadGuests();
};

const csrfHeaders = () => {
  const csrfToken = document.querySelector<HTMLMetaElement>('meta[name="csrf-token"]')?.content;
  return csrfToken ? { 'X-CSRF-TOKEN': csrfToken } : {};
};

const submitRsvp = async () => {
  if (!firstName.value || !lastName.value || !invitedBy.value) return;

  isSubmitting.value = true;
  formError.value = '';

  try {
    await axios.post('/invitati', {
      nome: firstName.value,
      cognome: lastName.value,
      invitato_da: invitedBy.value,
    }, {
      headers: csrfHeaders(),
    });

    engine?.triggerConfetti();
    registeredFirstName.value = firstName.value;
    showSuccess.value = true;
    firstName.value = '';
    lastName.value = '';
    invitedBy.value = '';
  } catch {
    formError.value = 'Non è stato possibile inviare la richiesta. Riprova.';
  } finally {
    isSubmitting.value = false;
  }
};

const login = async () => {
  isLoggingIn.value = true;
  loginError.value = '';

  try {
    const response = await axios.post<AuthResponse>('/area-riservata/login', {
      email: loginEmail.value,
      password: loginPassword.value,
    }, { headers: csrfHeaders() });

    syncCsrfToken(response.data.csrf_token);

    isAdminAuthenticated.value = true;
    loginPassword.value = '';
    engine?.triggerConfetti();
    activeSection.value = 'guests';
    await loadGuests();
  } catch {
    loginError.value = 'Email o password non corrette.';
  } finally {
    isLoggingIn.value = false;
  }
};

const logout = async () => {
  const response = await axios.post<AuthResponse>('/area-riservata/logout', {}, { headers: csrfHeaders() });
  syncCsrfToken(response.data.csrf_token);
  isAdminAuthenticated.value = false;
  guests.value = [];
  guestSearch.value = '';
  statusFilter.value = 'all';
  activeSection.value = 'reserved';
};

const updateGuestStatus = async (guest: Guest, approved: 0 | 1 | 2) => {
  if (guest.approved === approved) return;

  updatingGuestId.value = guest.id;
  updatingGuestStatus.value = approved === 0 ? null : approved;

  try {
    const response = await axios.patch<Guest>(`/area-riservata/invitati/${guest.id}`, {
      approved,
    }, { headers: csrfHeaders() });
    Object.assign(guest, response.data);
  } finally {
    updatingGuestId.value = null;
    updatingGuestStatus.value = null;
  }
};

onMounted(() => {
  if (canvasContainer.value) {
    engine = new RoomEngine(canvasContainer.value);
    engine.onMusicStateChange(playing => {
      isMusicPlaying.value = playing;
    });
  }
});

onUnmounted(() => {
  if (musicPlayerInactivityTimer !== null) window.clearTimeout(musicPlayerInactivityTimer);
  engine?.destroy();
});
</script>

<style scoped>
.room-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.welcome-screen {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: center;
  padding: 28px;
  box-sizing: border-box;
  overflow: hidden;
  background: rgba(10, 12, 20, 0.52);
  color: #ffffff;
  font-family: 'Courier New', monospace;
  text-align: center;
  backdrop-filter: blur(6px) saturate(130%);
  -webkit-backdrop-filter: blur(6px) saturate(130%);
}

.welcome-screen::before {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(103, 247, 232, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(103, 247, 232, 0.045) 1px, transparent 1px);
  background-size: 42px 42px;
  content: '';
  mask-image: radial-gradient(circle at center, #000 20%, transparent 78%);
}

.welcome-content {
  position: relative;
  display: grid;
  justify-items: center;
  width: min(100%, 520px);
}

.welcome-eyebrow {
  margin: 0 0 12px;
  color: #67f7e8;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
}

.welcome-content h1 {
  margin: 0;
  color: #ffffff;
  font-size: clamp(42px, 10vw, 72px);
  line-height: 0.98;
  letter-spacing: 0;
}

.explore-globe {
  position: relative;
  display: grid;
  place-items: center;
  width: 148px;
  height: 148px;
  margin: 34px 0 22px;
  border: 2px solid rgba(103, 247, 232, 0.9);
  border-radius: 50%;
  box-shadow: 0 0 28px rgba(103, 247, 232, 0.24), inset 0 0 28px rgba(103, 247, 232, 0.12);
  animation: globe-float 2.8s ease-in-out infinite;
}

.globe-ring {
  position: absolute;
  border: 1px solid rgba(103, 247, 232, 0.48);
  border-radius: 50%;
}

.globe-ring-horizontal {
  width: 138px;
  height: 52px;
  animation: globe-turn-horizontal 4s linear infinite;
}

.globe-ring-vertical {
  width: 52px;
  height: 138px;
  animation: globe-turn-vertical 4.8s linear infinite reverse;
}

.globe-core {
  color: #67f7e8;
  font-size: 38px;
  filter: drop-shadow(0 0 8px rgba(103, 247, 232, 0.7));
}

.welcome-hint {
  margin: 0 0 24px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
}

.welcome-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  padding: 13px 22px;
  background: #67f7e8;
  border: 1px solid #67f7e8;
  border-radius: 6px;
  color: #071210;
  cursor: pointer;
  font: 900 16px 'Courier New', monospace;
  letter-spacing: 0;
}

.welcome-button .material-symbols-rounded {
  font-size: 22px;
}

.welcome-enter-active,
.welcome-leave-active {
  transition: opacity 0.45s ease;
}

.welcome-enter-active .welcome-content,
.welcome-leave-active .welcome-content {
  transition: opacity 0.35s ease, transform 0.45s ease;
}

.welcome-enter-from,
.welcome-leave-to,
.welcome-enter-from .welcome-content,
.welcome-leave-to .welcome-content {
  opacity: 0;
}

.welcome-enter-from .welcome-content {
  transform: translateY(18px);
}

.welcome-leave-to .welcome-content {
  transform: scale(1.04);
}

.music-player {
  position: fixed;
  top: 22px;
  right: 22px;
  z-index: 120;
  display: grid;
  grid-template-columns: 58px minmax(120px, 1fr) 46px;
  grid-template-rows: 42px 18px;
  grid-template-areas:
    'cover info play'
    'cover volume volume';
  align-items: center;
  column-gap: 12px;
  row-gap: 7px;
  width: min(390px, calc(100vw - 44px));
  height: 89px;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
  background: rgba(15, 18, 17, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  box-shadow: 0 12px 38px rgba(0, 0, 0, 0.42);
  color: #ffffff;
  font-family: 'Courier New', monospace;
  backdrop-filter: blur(18px) saturate(130%);
  -webkit-backdrop-filter: blur(18px) saturate(130%);
  transition:
    width 0.48s cubic-bezier(0.16, 1, 0.3, 1),
    height 0.48s cubic-bezier(0.16, 1, 0.3, 1),
    padding 0.48s cubic-bezier(0.16, 1, 0.3, 1),
    column-gap 0.48s cubic-bezier(0.16, 1, 0.3, 1),
    row-gap 0.48s cubic-bezier(0.16, 1, 0.3, 1),
    grid-template-columns 0.48s cubic-bezier(0.16, 1, 0.3, 1),
    grid-template-rows 0.48s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.48s ease;
}

.music-player.minimized {
  grid-template-columns: 46px 0fr 42px;
  grid-template-rows: 46px 0;
  column-gap: 8px;
  row-gap: 0;
  width: 114px;
  height: 64px;
  padding: 8px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.36);
}

.music-player.minimized .album-link {
  width: 46px;
  height: 46px;
}

.music-player.minimized .track-info,
.music-player.minimized .volume-control {
  visibility: hidden;
  opacity: 0;
  transform: translateX(12px);
  pointer-events: none;
}

.album-link {
  position: relative;
  grid-area: cover;
  width: 58px;
  height: 58px;
  border-radius: 4px;
}

.album-link > img:first-child {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}

.album-link::after {
  position: absolute;
  bottom: -3px;
  left: -3px;
  z-index: 1;
  width: 22px;
  height: 22px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.55);
  content: '';
  transition: opacity 0.2s ease, transform 0.4s ease, visibility 0.2s;
}

.spotify-badge {
  position: absolute;
  bottom: -2px;
  left: -2px;
  z-index: 2;
  display: block;
  width: 20px;
  height: 20px;
  object-fit: contain;
  transition: opacity 0.2s ease, transform 0.4s ease, visibility 0.2s;
}

.music-player.minimized .spotify-badge,
.music-player.minimized .album-link::after {
  visibility: hidden;
  opacity: 0;
  transform: scale(0.6);
}

.track-info {
  grid-area: info;
  min-width: 0;
  transition: opacity 0.2s ease, transform 0.4s ease, visibility 0.2s;
}

.track-info strong,
.track-info span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.track-info strong {
  color: #67f7e8;
  font-size: 14px;
}

.track-info span {
  margin-top: 2px;
  color: rgba(255, 255, 255, 0.66);
  font-size: 11px;
}

.player-control {
  grid-area: play;
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  padding: 0;
  background: #67f7e8;
  border: 0;
  border-radius: 50%;
  color: #07120b;
  cursor: pointer;
}

.player-control .material-symbols-rounded {
  font-size: 28px;
}

.volume-control {
  grid-area: volume;
  display: grid;
  grid-template-columns: 20px minmax(70px, 1fr) 38px;
  align-items: center;
  gap: 7px;
  min-width: 0;
  transition: opacity 0.2s ease, transform 0.4s ease, visibility 0.2s;
}

.volume-control .material-symbols-rounded {
  color: rgba(255, 255, 255, 0.72);
  font-size: 18px;
}

.volume-control input {
  width: 100%;
  height: 4px;
  margin: 0;
  appearance: none;
  background: linear-gradient(to right, #67f7e8 var(--volume-level), rgba(255, 255, 255, 0.3) var(--volume-level));
  border-radius: 2px;
  cursor: pointer;
}

.volume-control input::-webkit-slider-thumb {
  width: 14px;
  height: 14px;
  appearance: none;
  background: #ffffff;
  border: 0;
  border-radius: 50%;
}

.volume-control input::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: #ffffff;
  border: 0;
  border-radius: 50%;
}

.volume-control output {
  color: rgba(255, 255, 255, 0.66);
  font-size: 11px;
  text-align: right;
}

@keyframes globe-float {
  50% {
    transform: translateY(-8px);
  }
}

@keyframes globe-turn-horizontal {
  to {
    transform: rotate(360deg);
  }
}

@keyframes globe-turn-vertical {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .explore-globe,
  .globe-ring {
    animation: none;
  }
}

/* Pulsante principale di apertura */
.party-btn {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #080510;
  color: #67f7e8;
  border: 2px solid #67f7e8;
  padding: 14px 32px;
  font-family: 'Courier New', monospace;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 3px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(103, 247, 232, 0.4), inset 0 0 15px rgba(103, 247, 232, 0.16);
  z-index: 100;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px rgba(103, 247, 232, 0.8);
}

.party-btn:hover {
  background: #67f7e8;
  color: #080510;
  box-shadow: 0 0 30px rgba(103, 247, 232, 0.82), inset 0 0 20px #67f7e8;
  text-shadow: none;
}

/* Pannello Drawer in stile Dark Club */
.drawer {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  background: rgba(8, 5, 16, 0.96);
  backdrop-filter: blur(16px);
  border-top: 3px solid #ff007f;
  box-shadow: 0 -15px 50px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 0, 127, 0.2);
  border-radius: 16px 16px 0 0;
  transition: bottom 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1000;
  color: #fff;
  font-family: 'Courier New', monospace;
}

.drawer.open {
  bottom: 0;
}

.drawer-content {
  max-width: 520px;
  margin: 0 auto;
  padding: 35px 25px 45px 25px;
  position: relative;
  text-align: left;
}

/* Tipografia Neon */
.neon-title {
  color: #00ffff;
  margin: 0 0 8px 0;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4);
}

.neon-title.success {
  color: #00ff66;
  text-shadow: 0 0 10px rgba(0, 255, 102, 0.8), 0 0 20px rgba(0, 255, 102, 0.4);
}

.subtitle {
  color: #ff007f;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 30px;
  text-shadow: 0 0 8px rgba(255, 0, 127, 0.6);
}

/* Blocchi Informazioni */
.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(0, 255, 255, 0.2);
  padding: 14px 18px;
  border-radius: 4px;
}

.label-tag {
  background: rgba(0, 255, 255, 0.1);
  color: #00ffff;
  border: 1px solid #00ffff;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 8px;
  margin-right: 15px;
  letter-spacing: 1px;
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.3);
}

.info-text strong {
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 1px;
}

/* Form inputs */
.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  font-size: 12px;
  color: #00ffff;
  margin-bottom: 6px;
  letter-spacing: 1.5px;
  font-weight: 700;
}

.input-field {
  width: 100%;
  padding: 14px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 0, 127, 0.5);
  border-radius: 4px;
  color: #fff;
  font-family: 'Courier New', monospace;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.input-field:focus {
  border-color: #00ffff;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.6);
}

.form-actions {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

/* Pulsanti Neon Arcade (Cyan e Gray) */
.neon-btn {
  font-family: 'Courier New', monospace;
  font-weight: 900;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 14px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
}

.neon-btn.cyan {
  background: #080510;
  color: #00ffff;
  border: 2px solid #00ffff;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4), inset 0 0 10px rgba(0, 255, 255, 0.2);
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.8);
}

.neon-btn.cyan:hover:not(:disabled) {
  background: #00ffff;
  color: #080510;
  box-shadow: 0 0 25px #00ffff, inset 0 0 15px #00ffff;
  text-shadow: none;
}

.neon-btn.cyan:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  box-shadow: none;
}

.neon-btn.gray {
  background: #080510;
  color: #8888aa;
  border: 2px solid #555577;
  box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.05);
}

.neon-btn.gray:hover {
  background: #222233;
  color: #ffffff;
  border-color: #aaaaee;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

/* Sezione Successo */
.success-section {
  text-align: center;
  padding: 30px 0;
}

.success-name {
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 2px;
  margin-top: 15px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
}

/* Pulsante di chiusura (X) */
.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: #ff007f;
  font-size: 28px;
  cursor: pointer;
  transition: all 0.2s;
  text-shadow: 0 0 8px rgba(255, 0, 127, 0.8);
}

.close-btn:hover {
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
}

/* Glass drawer */
.drawer {
  bottom: -100dvh;
  background: rgba(10, 12, 20, 0.52);
  border-top: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 8px 8px 0 0;
  box-shadow: 0 -20px 60px rgba(0, 0, 0, 0.42);
  backdrop-filter: blur(24px) saturate(135%);
  -webkit-backdrop-filter: blur(24px) saturate(135%);
}

.drawer.drawer.open {
  bottom: 0;
}

.drawer-content {
  display: flex;
  flex-direction: column;
  width: min(100%, 560px);
  max-height: min(82dvh, 720px);
  padding: 0;
  overflow: hidden;
  color: #f8fbff;
  font-family: 'Courier New', monospace;
}

.drawer-body {
  min-height: 340px;
  padding: 34px 28px 24px;
  overflow-y: auto;
}

.eyebrow {
  margin: 0 0 8px;
  color: #67f7e8;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}

.panel-title {
  margin: 0;
  color: #ffffff;
  font-size: 26px;
  line-height: 1.15;
  letter-spacing: 0;
}

.subtitle {
  margin: 9px 0 26px;
  color: rgba(244, 248, 255, 0.78);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.55;
  letter-spacing: 0;
  text-shadow: none;
}

.info-grid {
  display: grid;
  gap: 10px;
  margin-bottom: 22px;
}

.info-item {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 12px;
  margin: 0;
  padding: 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}

.info-item > .material-symbols-rounded {
  align-self: center;
  color: #67f7e8;
}

.info-item small,
.info-item strong {
  display: block;
}

.info-item small {
  margin-bottom: 3px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 10px;
  letter-spacing: 1px;
}

.info-item strong {
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0;
}

.input-group {
  display: block;
  margin-bottom: 14px;
}

.input-group > span {
  display: block;
  margin-bottom: 7px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.input-field {
  min-height: 54px;
  padding: 13px 14px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 6px;
  color: #ffffff;
  font-size: 18px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.input-field:focus {
  border-color: #67f7e8;
  box-shadow: 0 0 0 3px rgba(103, 247, 232, 0.15);
}

.primary-button {
  width: 100%;
  min-height: 54px;
  padding: 12px 18px;
  background: #67f7e8;
  border: 0;
  border-radius: 6px;
  color: #071210;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1px;
}

.primary-button:disabled {
  cursor: wait;
  opacity: 0.55;
}

.guest-list-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  min-height: 50px;
  margin-top: 14px;
  padding: 12px 18px;
  background: transparent;
  border: 1px solid rgba(103, 247, 232, 0.7);
  border-radius: 6px;
  color: #67f7e8;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
}

.error-message {
  margin: 0 0 14px;
  color: #ff9bbf;
  font-size: 15px;
}

.status-panel,
.empty-state,
.reserved-section {
  padding: 28px 18px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 6px;
  text-align: center;
}

.success-section .material-symbols-rounded,
.lock-icon {
  display: block;
  margin-bottom: 10px;
  color: #67f7e8;
  font-size: 34px;
}

.success-section {
  padding: 16px 14px;
}

.success-section p {
  margin: 6px 0 0;
}

.success-section p,
.empty-state {
  color: rgba(255, 255, 255, 0.72);
  font-size: 16px;
}

.add-person-hint {
  margin: 10px 0 14px;
  color: #67f7e8;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

.guest-list {
  display: grid;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.guest-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 6px;
}

.guest-list .material-symbols-rounded {
  color: #67f7e8;
}

.guest-list .guest-status-icon.guest-status-0 {
  color: #ffd84d;
}

.guest-list .guest-status-icon.guest-status-1 {
  color: #67f7e8;
}

.guest-list .guest-status-icon.guest-status-2 {
  color: #ff647f;
}

.guest-filters {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 8px;
  margin-bottom: 14px;
}

.filter-field {
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 46px;
  padding: 0 12px;
  background: rgba(255, 255, 255, 0.09);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.66);
}

.filter-field:focus-within {
  border-color: #67f7e8;
  box-shadow: 0 0 0 3px rgba(103, 247, 232, 0.12);
}

.filter-field .material-symbols-rounded {
  flex: 0 0 auto;
  margin-right: 8px;
  font-size: 20px;
}

.filter-field input,
.filter-field select {
  width: 100%;
  min-width: 0;
  height: 44px;
  padding: 0;
  background: transparent;
  border: 0;
  outline: 0;
  color: #ffffff;
  font: 600 16px 'Courier New', monospace;
}

.filter-field input::placeholder {
  color: rgba(255, 255, 255, 0.48);
}

.state-filter {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 5px;
  width: 100%;
  padding: 4px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
}

.state-filter-button {
  display: grid;
  place-items: center;
  min-width: 0;
  min-height: 48px;
  padding: 8px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.62);
  cursor: pointer;
}

.state-filter-button .material-symbols-rounded {
  font-size: 25px;
}

.state-filter-button.active {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.48);
  color: #ffffff;
}

.state-filter-button.filter-0 {
  color: #ffd84d;
}

.state-filter-button.filter-1 {
  color: #67f7e8;
}

.state-filter-button.filter-2 {
  color: #ff9bbf;
}

.section-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.section-heading .subtitle {
  margin-bottom: 20px;
}

.logout-button {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
}

.guest-details {
  display: grid;
  flex: 1;
  gap: 3px;
  min-width: 0;
}

.guest-details strong,
.guest-details small {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.guest-details small {
  color: rgba(255, 255, 255, 0.58);
  font-size: 14px;
}

.guest-details strong {
  font-size: 16px;
}

.status-control {
  display: flex;
  flex: 0 0 auto;
  margin-left: auto;
  gap: 4px;
}

.status-button {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  padding: 8px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.62);
  cursor: pointer;
}

.status-button .material-symbols-rounded {
  font-size: 23px;
}

.status-button.status-0 {
  color: #ffd84d;
}

.status-button.status-1 {
  color: #67f7e8;
}

.status-button.status-2 {
  color: #ff647f;
}

.status-button:disabled {
  cursor: wait;
  opacity: 0.72;
}

.status-loader {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid rgba(255, 255, 255, 0.28);
  border-top-color: currentColor;
  border-radius: 50%;
  animation: status-loader-spin 0.7s linear infinite;
}

@keyframes status-loader-spin {
  to {
    transform: rotate(360deg);
  }
}

.login-form {
  margin-top: 4px;
  text-align: left;
}

.bottom-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  padding: 10px max(18px, env(safe-area-inset-left)) calc(10px + env(safe-area-inset-bottom));
  background: rgba(5, 7, 12, 0.58);
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.nav-button,
.icon-button {
  display: inline-grid;
  place-items: center;
  border: 0;
  color: rgba(255, 255, 255, 0.58);
  cursor: pointer;
}

.nav-button {
  min-height: 48px;
  background: transparent;
  border-radius: 6px;
}

.nav-button.active {
  background: rgba(103, 247, 232, 0.13);
  color: #67f7e8;
}

.material-symbols-rounded {
  font-size: 24px;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

.close-btn {
  top: 14px;
  right: max(16px, env(safe-area-inset-right));
  z-index: 2;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;
  color: #ffffff;
  text-shadow: none;
}

@media (max-width: 600px) {
  .music-player {
    top: 14px;
    right: 14px;
    width: calc(100vw - 28px);
  }

  .music-player.minimized {
    right: 14px;
    width: 114px;
  }

  .drawer-content {
    max-height: 88dvh;
  }

  .drawer-body {
    min-height: 0;
    padding: 30px 20px 20px;
  }

  .panel-title {
    max-width: calc(100% - 48px);
    font-size: 22px;
  }

  .guest-list li {
    align-items: center;
  }

  .guest-filters {
    grid-template-columns: 1fr;
  }

  .guest-details {
    width: auto;
  }

  .status-control {
    margin-left: auto;
  }

  .status-button {
    min-height: 48px;
  }
}
</style>