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

            <!-- <div class="party-preview">
              <div class="party-preview-heading">
                <span class="material-symbols-rounded" aria-hidden="true">movie</span>
                <strong>Non sarà solo disco...</strong>
              </div>
              <p>Durante la festa verrà registrato il video della canzone <strong>“Bacio che schiocca”</strong>. Ascoltatela per caricarci!</p>
              <p>Qualcuno di noi forse si esibirà con un mini concerto.</p>
            </div> -->

            <div class="party-theme-note">
              <span class="material-symbols-rounded" aria-hidden="true">checkroom</span>
              <div class="party-theme-content">
                <small>DRESS CODE</small>
                <strong>Scegli uno dei tre temi anni '70-'80-'90</strong>
                <ol>
                  <li>Disco music</li>
                  <li>Paninaro-metallaro</li>
                  <li>Personaggi di fantascienza dei film anni '80-'90</li>
                </ol>
              </div>
            </div>
 
            <button class="primary-button" @click="selectSection('register')">Conferma la presenza</button>
          </div>

          <div v-else-if="activeSection === 'register'" class="form-section">
            <div v-if="showSuccess" class="approval-confirmation" role="status" aria-live="polite">
              <span class="approval-check" aria-hidden="true">
                <svg viewBox="0 0 52 52">
                  <circle cx="26" cy="26" r="24"></circle>
                  <path d="M15 27 23 35 38 18"></path>
                </svg>
              </span>
              <strong>Richiesta inviata</strong>
              <p>Grazie, {{ registeredFirstName }}. La richiesta dovrà essere approvata dagli organizzatori.</p>
            </div>

            <template v-else>
              <p class="eyebrow">REGISTRAZIONE</p>
              <h2 class="panel-title">Lascia i tuoi dati</h2>
              <p class="subtitle">La presenza sarà confermata dall'organizzatore.</p>

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
            </template>
          </div>

          <div v-else-if="activeSection === 'party'" class="party-details-section">
            <div class="party-details-heading">
              <div>
                <p class="eyebrow">UN GESTO CHE RESTA</p>
                <h2 class="panel-title">Al posto dei regali</h2>
              </div>
              <a
                class="party-youtube-link"
                href="https://www.youtube.com/watch?v=YaC3UY3Dnnk"
                target="_blank"
                rel="noopener noreferrer"
                title="Ascolta Bacio che schiocca su YouTube"
                aria-label="Ascolta Bacio che schiocca su YouTube"
              >
                <span class="material-symbols-rounded">smart_display</span>
              </a>
            </div>
            <p class="subtitle">se ti fa piacere, puoi contribuire con una donazione a favore di un'associazione. Scegli Marco o Leonardo per vedere tutti i dettagli.</p>

            <div class="donation-actions">
              <button type="button" class="donation-button donation-marco" @click="openDonation('marco')">
                <span class="material-symbols-rounded">volunteer_activism</span>
                Marco
              </button>
              <button type="button" class="donation-button donation-leonardo" @click="openDonation('leonardo')">
                <span class="material-symbols-rounded">landscape</span>
                Leonardo
              </button>
            </div>

            <button type="button" class="primary-button add-guest-button" @click="selectSection('register')">
              <span class="material-symbols-rounded">person_add</span>
              Aggiungi un altro invitato
            </button>

            <section v-if="isAdminAuthenticated || programVisible" class="program-section" aria-labelledby="program-title">
              <div class="program-heading">
                <div>
                  <p class="eyebrow">LA SERATA</p>
                  <h2 id="program-title" class="panel-title">Programma della serata</h2>
                </div>
                <button
                  v-if="isAdminAuthenticated"
                  type="button"
                  class="icon-button program-edit-button"
                  :title="isEditingProgram ? 'Chiudi modifica' : 'Modifica programma'"
                  :aria-label="isEditingProgram ? 'Termina modifica programma' : 'Modifica programma'"
                  :aria-pressed="isEditingProgram"
                  @click="toggleProgramEditor"
                >
                  <span class="material-symbols-rounded">{{ isEditingProgram ? 'done' : 'edit' }}</span>
                </button>
              </div>

              <div v-if="isEditingProgram" class="program-editor">
                <label class="program-visibility">
                  <input v-model="programVisible" type="checkbox" @change="saveProgramVisibility" />
                  <span>Mostra il programma agli invitati</span>
                </label>

                <form class="program-new-item" @submit.prevent="addProgramItem">
                  <input v-model="newProgramTime" class="input-field program-time-input" type="time" aria-label="Orario nuova voce" />
                  <input v-model.trim="newProgramDescription" class="input-field" maxlength="255" placeholder="Cosa succederà" aria-label="Descrizione nuova voce" required />
                  <button class="icon-button program-add-button" type="submit" title="Aggiungi voce" aria-label="Aggiungi voce" :disabled="isSavingProgram">
                    <span class="material-symbols-rounded">add</span>
                  </button>
                </form>

                <ul class="program-editor-list">
                  <li v-for="item in programItems" :key="item.id">
                    <div class="program-item-fields">
                      <input v-model="item.orario" class="input-field program-time-input" type="time" :aria-label="`Orario: ${item.descrizione}`" />
                      <input v-model.trim="item.descrizione" class="input-field" maxlength="255" :aria-label="`Descrizione voce ${item.id}`" />
                    </div>
                    <div class="program-item-actions">
                      <button
                        v-if="!item.orario"
                        type="button"
                        class="icon-button"
                        title="Sposta su"
                        aria-label="Sposta voce su"
                        :disabled="isReorderingProgram || programItems[0]?.id === item.id"
                        @click="moveUntimedProgramItem(item, -1)"
                      >
                        <span class="material-symbols-rounded">arrow_upward</span>
                      </button>
                      <button
                        v-if="!item.orario"
                        type="button"
                        class="icon-button"
                        title="Sposta giù"
                        aria-label="Sposta voce giù"
                        :disabled="isReorderingProgram || programItems[programItems.length - 1]?.id === item.id"
                        @click="moveUntimedProgramItem(item, 1)"
                      >
                        <span class="material-symbols-rounded">arrow_downward</span>
                      </button>
                      <button
                        v-if="item.orario"
                        type="button"
                        class="icon-button program-clear-time"
                        title="Togli orario"
                        :aria-label="`Togli orario da ${item.descrizione}`"
                        @click="clearProgramTime(item)"
                      >
                        <span class="material-symbols-rounded">schedule</span>
                      </button>
                      <button type="button" class="icon-button" title="Salva" aria-label="Salva voce" @click="saveProgramItem(item)">
                        <span class="material-symbols-rounded">save</span>
                      </button>
                      <button type="button" class="icon-button program-delete-button" title="Elimina" aria-label="Elimina voce" @click="deleteProgramItem(item)">
                        <span class="material-symbols-rounded">delete</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>

              <div v-else-if="isLoadingProgram" class="empty-state">Caricamento programma...</div>
              <ol v-else-if="programItems.length" class="program-list">
                <li v-for="item in programItems" :key="item.id">
                  <time v-if="item.orario">{{ item.orario }}</time>
                  <span v-else class="program-marker" aria-hidden="true"></span>
                  <strong>{{ item.descrizione }}</strong>
                </li>
              </ol>
              <p v-else-if="isAdminAuthenticated" class="empty-state">Aggiungi la prima voce al programma.</p>
            </section>
          </div>

          <div v-else-if="activeSection === 'donation' && activeDonation" class="donation-detail">
            <button type="button" class="icon-button donation-back-button" title="Torna alle informazioni" aria-label="Torna alle informazioni della festa" @click="selectSection('party')">
              <span class="material-symbols-rounded">arrow_back</span>
            </button>
            <p class="eyebrow">DONAZIONE DI {{ activeDonation.name.toUpperCase() }}</p>
            <button type="button" class="primary-button copy-iban-button" @click="copyDonationIban">
              <span class="material-symbols-rounded">content_copy</span>
              {{ copiedIban ? 'IBAN copiato' : 'Copia IBAN' }}
            </button>
            <a
              class="donation-image-link"
              :href="activeDonation.image"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Apri a tutto schermo i dettagli per la donazione di ${activeDonation.name}`"
            >
              <img :src="activeDonation.image" :alt="`Dettagli per la donazione di ${activeDonation.name}`" loading="eager" fetchpriority="high" decoding="async" />
            </a>
          </div>

          <div v-else-if="activeSection === 'guests'">
            <p class="eyebrow">GUEST LIST</p>
            <div class="section-heading">
              <div>
                <h2 class="panel-title">{{ isAdminAuthenticated ? 'Gestione invitati' : 'Lista invitati' }}</h2>
                <p class="subtitle">
                  {{ isAdminAuthenticated ? 'Controlla e aggiorna tutte le richieste.' : 'Le presenze già confermate.' }}
                </p>
                <div
                  class="guest-capacity"
                  role="progressbar"
                  aria-valuemin="0"
                  :aria-valuenow="approvedGuestCount"
                  :aria-valuemax="guestCapacity"
                >
                  <div class="guest-capacity-label">
                    <span>Approvati</span>
                    <strong>{{ approvedGuestCount }} / {{ guestCapacity }}</strong>
                  </div>
                  <span class="guest-capacity-track" aria-hidden="true">
                    <span :style="{ width: `${guestCapacityPercentage}%` }"></span>
                  </span>
                </div>
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

          <div v-else-if="activeSection === 'reserved'" class="reserved-section">
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

type Section = 'info' | 'register' | 'party' | 'donation' | 'guests' | 'reserved';
type DonationKey = 'marco' | 'leonardo';
type AuthResponse = { authenticated: boolean; csrf_token: string };
type Guest = {
  id: number;
  nome: string;
  cognome: string;
  invitato_da?: string;
  approved?: 0 | 1 | 2;
};
type ProgramItem = {
  id: number;
  orario: string | null;
  descrizione: string;
  posizione: number;
};
type ProgramResponse = { visibile: boolean; voci: ProgramItem[] };

const canvasContainer = ref<HTMLDivElement | null>(null);
let engine: RoomEngine | null = null;

const showWelcome = ref(true);
const isOpen = ref(false);
const activeSection = ref<Section>('info');
const showSuccess = ref(false);
const registeredFirstName = ref('');
const selectedDonation = ref<DonationKey | null>(null);
const copiedIban = ref(false);
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
const programVisible = ref(false);
const programItems = ref<ProgramItem[]>([]);
const isLoadingProgram = ref(false);
const isEditingProgram = ref(false);
const isSavingProgram = ref(false);
const isReorderingProgram = ref(false);
const newProgramTime = ref('');
const newProgramDescription = ref('');
let registrationTransitionTimer: number | null = null;
let copiedIbanTimer: number | null = null;
const guestCapacity = 300;

const donations = {
  marco: {
    name: 'Marco',
    image: '/images/marco.webp',
    iban: 'IT95J0306909606100000018291',
  },
  leonardo: {
    name: 'Leonardo',
    image: '/images/leonardo.webp',
    iban: 'IT19J0801134320000011042626',
  },
} as const;

const activeDonation = computed(() => selectedDonation.value ? donations[selectedDonation.value] : null);

const navigationItems: Array<{ id: Section; icon: string; label: string }> = [
  { id: 'info', icon: 'info', label: 'Info' },
  { id: 'register', icon: 'person_add', label: 'Registrati' },
  { id: 'party', icon: 'celebration', label: 'Festa e donazioni' },
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
const approvedGuestCount = computed(() => guests.value.filter(guest => (guest.approved ?? 1) === 1).length);
const guestCapacityPercentage = computed(() => Math.min(approvedGuestCount.value / guestCapacity * 100, 100));

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

const enterParty = () => {
  showWelcome.value = false;
  engine?.activateYouTubePlayer();
};

const closeDrawer = () => {
  isOpen.value = false;
  setTimeout(() => {
    activeSection.value = 'info';
    showSuccess.value = false;
    selectedDonation.value = null;
    isEditingProgram.value = false;
  }, 300);
};

const loadProgram = async () => {
  isLoadingProgram.value = true;
  try {
    const endpoint = isAdminAuthenticated.value
      ? '/area-riservata/programma-serata'
      : '/programma-serata';
    const response = await axios.get<ProgramResponse>(endpoint);
    programVisible.value = response.data.visibile;
    programItems.value = response.data.voci;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      isAdminAuthenticated.value = false;
      isEditingProgram.value = false;
      await loadProgram();
    }
  } finally {
    isLoadingProgram.value = false;
  }
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
  if (section === 'party') {
    selectedDonation.value = null;
    await loadProgram();
  }
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
    if (registrationTransitionTimer !== null) window.clearTimeout(registrationTransitionTimer);
    registrationTransitionTimer = window.setTimeout(() => {
      showSuccess.value = false;
      registrationTransitionTimer = null;
      void selectSection('party');
    }, 2200);
  } catch {
    formError.value = 'Non è stato possibile inviare la richiesta. Riprova.';
  } finally {
    isSubmitting.value = false;
  }
};

const openDonation = (donation: DonationKey) => {
  selectedDonation.value = donation;
  copiedIban.value = false;
  activeSection.value = 'donation';
};

const copyDonationIban = async () => {
  if (!activeDonation.value) return;

  try {
    await navigator.clipboard.writeText(activeDonation.value.iban);
  } catch {
    const input = document.createElement('textarea');
    input.value = activeDonation.value.iban;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  }

  copiedIban.value = true;
  if (copiedIbanTimer !== null) window.clearTimeout(copiedIbanTimer);
  copiedIbanTimer = window.setTimeout(() => {
    copiedIban.value = false;
    copiedIbanTimer = null;
  }, 2000);
};

const toggleProgramEditor = async () => {
  isEditingProgram.value = !isEditingProgram.value;
  if (isEditingProgram.value) await loadProgram();
};

const saveProgramVisibility = async () => {
  await axios.patch('/area-riservata/programma-serata/visibilita', {
    visibile: programVisible.value,
  }, { headers: csrfHeaders() });
};

const addProgramItem = async () => {
  if (!newProgramDescription.value) return;
  isSavingProgram.value = true;
  try {
    await axios.post('/area-riservata/programma-serata', {
      orario: newProgramTime.value || null,
      descrizione: newProgramDescription.value,
    }, { headers: csrfHeaders() });
    newProgramTime.value = '';
    newProgramDescription.value = '';
    await loadProgram();
  } finally {
    isSavingProgram.value = false;
  }
};

const saveProgramItem = async (item: ProgramItem) => {
  await axios.patch(`/area-riservata/programma-serata/${item.id}`, {
    orario: item.orario || null,
    descrizione: item.descrizione,
  }, { headers: csrfHeaders() });
  await loadProgram();
};

const clearProgramTime = async (item: ProgramItem) => {
  item.orario = null;
  await saveProgramItem(item);
};

const deleteProgramItem = async (item: ProgramItem) => {
  await axios.delete(`/area-riservata/programma-serata/${item.id}`, { headers: csrfHeaders() });
  await loadProgram();
};

const moveUntimedProgramItem = async (item: ProgramItem, direction: -1 | 1) => {
  if (item.orario || isReorderingProgram.value) return;

  const previousItems = [...programItems.value];
  const currentIndex = previousItems.findIndex(programItem => programItem.id === item.id);
  const destinationIndex = currentIndex + direction;
  if (currentIndex < 0 || destinationIndex < 0 || destinationIndex >= previousItems.length) return;

  const orderedItems = [...previousItems];
  [orderedItems[currentIndex], orderedItems[destinationIndex]] = [orderedItems[destinationIndex], orderedItems[currentIndex]];
  programItems.value = orderedItems;
  isReorderingProgram.value = true;

  try {
    const response = await axios.patch<{ voci: ProgramItem[] }>('/area-riservata/programma-serata/ordine', {
      voci: orderedItems.map(programItem => programItem.id),
    }, { headers: csrfHeaders() });
    programItems.value = response.data.voci;
  } catch {
    programItems.value = previousItems;
  } finally {
    isReorderingProgram.value = false;
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
  }
});

onUnmounted(() => {
  if (registrationTransitionTimer !== null) window.clearTimeout(registrationTransitionTimer);
  if (copiedIbanTimer !== null) window.clearTimeout(copiedIbanTimer);
  engine?.destroy();
});
</script>

<style scoped>
.room-container {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #0a0a12;
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
  background: rgba(10, 12, 20, 0.88);
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
  max-height: calc(100dvh - 12px);
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

.approval-confirmation {
  display: grid;
  justify-items: center;
  min-height: 300px;
  align-content: center;
  padding: 24px;
  text-align: center;
}

.approval-confirmation strong {
  margin-top: 18px;
  color: #ffffff;
  font-size: 22px;
}

.approval-confirmation p {
  max-width: 390px;
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.74);
  font-size: 15px;
  line-height: 1.55;
}

.approval-check {
  width: 92px;
  height: 92px;
}

.approval-check svg {
  display: block;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #67f7e8;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  filter: drop-shadow(0 0 10px rgba(103, 247, 232, 0.45));
}

.approval-check circle {
  stroke-dasharray: 151;
  stroke-dashoffset: 151;
  animation: approval-circle 0.65s ease-out forwards;
}

.approval-check path {
  stroke-dasharray: 35;
  stroke-dashoffset: 35;
  animation: approval-check 0.42s 0.55s ease-out forwards;
}

@keyframes approval-circle {
  to { stroke-dashoffset: 0; }
}

@keyframes approval-check {
  to { stroke-dashoffset: 0; }
}

.donation-actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 14px;
}

.party-details-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding-right: 52px;
}

.party-youtube-link {
  display: grid;
  flex: 0 0 48px;
  place-items: center;
  width: 48px;
  height: 48px;
  background: #ff0033;
  border: 1px solid #ff0033;
  border-radius: 50%;
  color: #ffffff;
  box-shadow: 0 6px 20px rgba(255, 0, 51, 0.3);
  text-decoration: none;
}

.party-youtube-link .material-symbols-rounded {
  font-size: 27px;
  font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 24;
}

.party-theme-note {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
  padding: 13px 14px;
  background: rgba(255, 216, 77, 0.1);
  border: 1px solid rgba(255, 216, 77, 0.42);
  border-radius: 6px;
}

.party-preview {
  margin-bottom: 12px;
  padding: 14px;
  background: rgba(103, 247, 232, 0.08);
  border: 1px solid rgba(103, 247, 232, 0.32);
  border-radius: 6px;
}

.party-preview-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 9px;
  color: #67f7e8;
}

.party-preview-heading .material-symbols-rounded {
  font-size: 25px;
}

.party-preview p {
  margin: 7px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  line-height: 1.45;
}

.party-theme-note > .material-symbols-rounded {
  color: #ffd84d;
  font-size: 28px;
}

.party-theme-note small,
.party-theme-note strong {
  display: block;
}

.party-theme-note small {
  margin-bottom: 3px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 10px;
  letter-spacing: 1px;
}

.party-theme-note strong {
  color: #ffffff;
  font-size: 14px;
  line-height: 1.35;
}

.party-theme-content ol {
  display: grid;
  gap: 5px;
  margin: 10px 0 0;
  padding-left: 20px;
  color: rgba(255, 255, 255, 0.84);
  font-size: 13px;
  line-height: 1.4;
}

.donation-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  min-height: 54px;
  border: 1px solid currentColor;
  border-radius: 6px;
  cursor: pointer;
  font: 800 15px 'Courier New', monospace;
}

.donation-marco {
  background: rgba(0, 217, 255, 0.14);
  color: #67f7e8;
}

.donation-leonardo {
  background: rgba(255, 216, 77, 0.14);
  color: #ffd84d;
}

.add-guest-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
}

.program-section {
  margin-top: 30px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
}

.program-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
}

.program-edit-button,
.donation-back-button {
  flex: 0 0 42px;
  width: 42px;
  height: 42px;
  background: rgba(103, 247, 232, 0.12);
  border: 1px solid rgba(103, 247, 232, 0.5);
  border-radius: 50%;
  color: #67f7e8;
}

.program-list,
.program-editor-list {
  display: grid;
  gap: 8px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;
}

.program-list li {
  display: grid;
  grid-template-columns: 58px 1fr;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.program-list time {
  color: #ffd84d;
  font-weight: 900;
}

.program-list strong {
  font-size: 15px;
  line-height: 1.35;
}

.program-marker {
  width: 8px;
  height: 8px;
  margin-left: 18px;
  background: #67f7e8;
  border-radius: 50%;
  box-shadow: 0 0 9px rgba(103, 247, 232, 0.7);
}

.program-editor {
  margin-top: 18px;
}

.program-visibility {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
}

.program-visibility input {
  width: 20px;
  height: 20px;
  accent-color: #67f7e8;
}

.program-new-item {
  display: grid;
  grid-template-columns: 108px minmax(0, 1fr) 48px;
  gap: 8px;
}

.program-time-input {
  min-width: 0;
  padding-inline: 9px;
}

.program-clear-time {
  color: #ffd84d;
}

.program-clear-time .material-symbols-rounded {
  font-size: 21px;
}

.program-add-button {
  min-height: 54px;
  background: #67f7e8;
  border-radius: 6px;
  color: #071210;
}

.program-editor-list li {
  padding: 12px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 6px;
}

.program-item-fields {
  display: grid;
  grid-template-columns: 108px minmax(0, 1fr);
  gap: 8px;
}

.program-item-actions {
  display: flex;
  justify-content: flex-end;
  gap: 6px;
  margin-top: 8px;
}

.program-item-actions .icon-button {
  width: 42px;
  height: 42px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 6px;
}

.program-item-actions .icon-button:disabled {
  cursor: not-allowed;
  opacity: 0.3;
}

.program-delete-button {
  color: #ff8aa8;
}

.donation-detail {
  position: relative;
  padding-top: 48px;
}

.donation-detail .eyebrow {
  margin-bottom: 12px;
}

.donation-image-link {
  display: block;
  width: min(100%, 480px);
  margin: 18px auto;
}

.donation-detail img {
  display: block;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.22);
  border-radius: 6px;
}

.donation-back-button {
  position: absolute;
  top: -8px;
  left: 0;
}

.copy-iban-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
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
  margin-bottom: 7px;
}

.guest-capacity {
  width: min(240px, 100%);
  margin-bottom: 16px;
}

.guest-capacity-label {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.58);
  font-size: 11px;
}

.guest-capacity-label strong {
  color: #67f7e8;
  font-size: inherit;
}

.guest-capacity-track,
.guest-capacity-track > span {
  display: block;
  height: 4px;
  border-radius: 2px;
}

.guest-capacity-track {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.16);
}

.guest-capacity-track > span {
  min-width: 0;
  background: #67f7e8;
  transition: width 0.35s ease;
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
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  padding: 10px max(18px, env(safe-area-inset-left)) calc(10px + env(safe-area-inset-bottom));
  background: rgba(5, 7, 12, 0.9);
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
  .welcome-screen,
  .drawer {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .welcome-screen {
    background: rgba(10, 12, 20, 0.72);
  }

  .drawer {
    background: rgba(10, 12, 20, 0.94);
  }

  .drawer-content {
    max-height: calc(100dvh - 6px);
  }

  .drawer-body {
    min-height: 0;
    padding: 30px 20px 20px;
  }

  .donation-image-link {
    width: calc(100% + 24px);
    margin: 16px -12px;
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