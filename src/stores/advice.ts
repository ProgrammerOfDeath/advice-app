import { defineStore } from 'pinia'

interface AdviceSlip {
  slip: {
    id: string
    advice: string
  }
}

export const useAdviceStore = defineStore({
  id: 'advice',
  state: () => ({
    advice: ''
  }),
  actions: {
    async fetchAdvice() {
      try {
        const response = await fetch('https://api.adviceslip.com/advice')
        const adviceData: AdviceSlip = await response.json()

        if (adviceData) {
          console.log(adviceData)
          this.advice = adviceData.slip.advice
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
