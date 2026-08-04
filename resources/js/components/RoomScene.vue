<template>
  <div>
    <div ref="canvasContainer" class="room-container"></div>
    
    <!-- Pulsante per aprire il pannello -->
    <button 
      id="info-btn" 
      class="party-btn" 
      @click="openDrawer"
      :style="{ opacity: isOpen ? '0' : '1', pointerEvents: isOpen ? 'none' : 'auto' }"
    >
      INFO FESTA
    </button>

    <!-- Pannello a scomparsa dal basso -->
    <div id="info-drawer" class="drawer" :class="{ open: isOpen }">
      <div class="drawer-content">
        <button id="close-btn" class="close-btn" @click="closeDrawer">&times;</button>
        
        <!-- SEZIONE INFO PRINCIPALE -->
        <div v-if="!showForm && !showSuccess">
          <h2 class="neon-title">FESTA DI COMPLEANNO</h2>
          <p class="subtitle">ANNI 80</p>
          
          <div class="info-item">
            <span class="label-tag">ORARIO</span>
            <div class="info-text">
              <strong>Dalle 21:00</strong>
            </div>
          </div>

          <div class="info-item">
            <span class="label-tag">LUOGO</span>
            <div class="info-text">
              <strong>Discoteca da definire</strong>
            </div>
          </div>

          <!-- Bottone per aprire il form di registrazione -->
          <button class="neon-btn cyan" @click="openForm">REGISTRA LA MIA PRESENZA</button>
        </div>

        <!-- SEZIONE FORM NOME E COGNOME -->
        <div v-if="showForm && !showSuccess" class="form-section">
          <h2 class="neon-title">REGISTRAZIONE</h2>
          <p class="subtitle">Inserisci i tuoi dati per confermare</p>

          <div class="input-group">
            <label>NOME</label>
            <input type="text" v-model="firstName" placeholder="Inserisci nome" class="input-field" />
          </div>

          <div class="input-group">
            <label>COGNOME</label>
            <input type="text" v-model="lastName" placeholder="Inserisci cognome" class="input-field" />
          </div>

          <div class="form-actions">
            <button class="neon-btn gray" @click="showForm = false">INDIETRO</button>
            <button class="neon-btn cyan" @click="submitRsvp" :disabled="!firstName || !lastName">CONFERMA</button>
          </div>
        </div>

        <!-- SEZIONE MESSAGGIO DI SUCCESSO -->
        <div v-if="showSuccess" class="success-section">
          <h2 class="neon-title success">REGISTRAZIONE RIUSCITA</h2>
          <p class="success-name">CI VEDIAMO IN PISTA, {{ firstName.toUpperCase() }}!</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RoomEngine } from './engine/RoomEngine';

const canvasContainer = ref<HTMLDivElement | null>(null);
let engine: RoomEngine | null = null;

// Stati reattivi
const isOpen = ref(false);
const showForm = ref(false);
const showSuccess = ref(false);

const firstName = ref('');
const lastName = ref('');

const openDrawer = () => {
  isOpen.value = true;
};

const closeDrawer = () => {
  isOpen.value = false;
  setTimeout(() => {
    showForm.value = false;
    showSuccess.value = false;
    firstName.value = '';
    lastName.value = '';
  }, 300);
};

const openForm = () => {
  showForm.value = true;
};

const submitRsvp = () => {
  if (!firstName.value || !lastName.value) return;

  // Mostra il messaggio di successo
  showSuccess.value = true;

  // Fa esplodere i coriandoli nella stanza 3D
  if (engine) {
    engine.triggerConfetti();
  }

  // 👈 Modificato da 2000 a 4000 millisecondi (4 secondi totali)
  setTimeout(() => {
    closeDrawer();
  }, 4000);
};

onMounted(() => {
  if (canvasContainer.value) {
    engine = new RoomEngine(canvasContainer.value);
  }
});

onUnmounted(() => {
  engine?.destroy();
});
</script>

<style scoped>
.room-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/* Pulsante principale di apertura in stile Neon Magenta */
.party-btn {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: #080510;
  color: #ff007f;
  border: 2px solid #ff007f;
  padding: 14px 32px;
  font-family: 'Courier New', monospace;
  font-weight: 900;
  font-size: 16px;
  letter-spacing: 3px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(255, 0, 127, 0.4), inset 0 0 15px rgba(255, 0, 127, 0.2);
  z-index: 100;
  transition: all 0.3s ease;
  text-shadow: 0 0 8px rgba(255, 0, 127, 0.8);
}

.party-btn:hover {
  background: #ff007f;
  color: #080510;
  box-shadow: 0 0 30px #ff007f, inset 0 0 20px #ff007f;
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
</style>