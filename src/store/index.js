import Vue from "vue";
import Vuex from "vuex";
import VirusService from '../services/virus.service'

Vue.use(Vuex);

import { Virus, viruses } from "../model.js";
import router from "../router/index.js";

export default new Vuex.Store({
  state: () => ({
    samples: [],
    basket: [],
    parts: [],
    viruses,
    newVirus: null,
    router,
  }),
  mutations: {
    receiveVirus: function (state) {
      state.viruses.forEach((v) => state.samples.push(v));
    },
    sendToLab: function (state) {
      state.basket.forEach((v) => state.samples.push(v));
      state.basket.splice(0, state.basket.length);
    },
    cut: function (state, cut) {
      //a changer , doit enlever le dernier parametre
      let { chosenViruses, cutFactor } = cut;
      if (cutFactor == 0) return;
      chosenViruses.forEach((e) => {
        let s = state.samples[e];
        for (let i = 0; i < s.code.length; i += cutFactor) {
          state.parts.push({ code: s.code.substring(i, i + cutFactor) });
        }
      });
      // remove chosen viruses
      for (let i = chosenViruses.length - 1; i >= 0; i--) {
        state.samples.splice(chosenViruses[i], 1);
      }
      // unselect all
      chosenViruses.splice(0, chosenViruses.length);
    },
    mutation: function (state, mutation) {
      //a changer , doit enlever le dernier parametre
      let { nbMutation, chosenViruses } = mutation;
      if (nbMutation == 0) return;

      chosenViruses.forEach((e) => {
        let newCode;
        let s = state.samples[e];
        for (let i = 0; i < nbMutation; i++) {
          let idx = Math.floor(Math.random() * s.code.length);
          let chr = String.fromCharCode(
            Math.floor(Math.random() * 4) + "A".charCodeAt(0)
          );
          newCode = s.code.substring(0, idx) + chr + s.code.substring(idx + 1);
          s.code = newCode;
          s.updateCaracs();
        }
      });
    },
    mix: function (state, chosenParts) {
      let newCode = "";

      let chosen = [...chosenParts]; // real copy so that we can splice on the copy
      let nb = chosen.length;
      for (let i = 0; i < nb; i++) {
        // choose randomly a part among the selected ones
        let idx = Math.floor(Math.random() * chosen.length);
        let p = state.parts[chosen[idx]];
        newCode = newCode + p.code;
        chosen.splice(idx, 1);
      }
      state.newVirus = new Virus(viruses.length, "mixedvirus", newCode);
      // remove chosen parts
      for (let i = chosenParts.length - 1; i >= 0; i--) {
        state.parts.splice(chosenParts[i], 1);
      }
      // unselect all
      chosenParts.splice(0, chosenParts.length);
    },
    sendToLibrary: function (state) {
      state.viruses.push(state.newVirus);
      state.newVirus = null;
    },
    addbasket(state, v) {
      state.router.push({
        path: "/library/addbasket?name=" + v.name + "&code=" + v.code,
      });
      if (state.router.currentRoute.params.op == "addbasket") {
        state.basket.push(new Virus(0, v.name, v.code));
        state.router.push({ path: "/library/view" });
      }
    },
  },

  modules: {},
  actions: {
    async getUsers({ commit, state }) {
      console.log('get all users');
      if (state.users.length !== 0) return {err:0, status:200, data:'users already retrieved'};
      let response = null;
      try {
        response = await VirusService.getVirus();
        if (response.err === 0) {
          commit('updateVirus', response.data);
        }
      } catch (err) {
        console.log("ABNORMAL CASE: ERROR while getting all users");
        return err.response; // pass the whole object from server (err+data)
      }
    },
  }
});
