import type { Config } from 'tailwindcss'
import { colors, fonts } from '@enosd-ui/tokens'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        default: [fonts.default],
        code: [fonts.code],
      },
    }
  },
  plugins: [],
}

export default config