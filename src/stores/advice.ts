import { defineStore } from 'pinia'

interface AdviceSlip {
  slip: Advice
}

export interface Advice {
  id: string
  advice: string
}

export const useAdviceStore = defineStore({
  id: 'advice',
  state: () => ({
    advice: {} as Advice
  }),
  actions: {
    async fetchAdvice() {
      try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const adviceData: AdviceSlip = await response.json()

        if (adviceData) {
          console.log(adviceData)
          this.advice = adviceData.slip
          console.log(this.advice)
        } else {
          throw Error
        }
      } catch {
        console.error('something went wrong')
      }
    }
  }
})
