import { defineStore } from 'pinia'

interface AdviceSlip {
  slip_id: string
  advice: string
}

export const useCounterStore = defineStore({
  id: 'advice',
  state: () => ({
    advice: ''
  }),
  actions: {
    async getAdviceFromApi() {
      const response = await fetch('https://api.adviceslip.com/advice')
      const adviceData: AdviceSlip = await response.json()

      if (adviceData) {
        this.advice = adviceData.advice
      }
    }
  }
})
