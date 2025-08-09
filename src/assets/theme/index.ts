import Aura from "@primeuix/themes/aura";
import { definePreset } from '@primeuix/themes';

export const ThemPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{cyan.50}',
      100: '{cyan.100}',
      200: '{cyan.200}',
      300: '{cyan.300}',
      400: '{cyan.400}',
      500: '{cyan.500}',
      600: '{cyan.600}',
      700: '{cyan.700}',
      800: '{cyan.800}',
      900: '{cyan.900}',
      950: '{cyan.950}',
    },
    formField: {
      borderRadius: '3px',
      focusRing: {
        width: '2px',
        style: 'solid',
        color: '{blue.300}',
        offset: '1px',
      },
    },
    colorScheme: {
      light: {
        formField: {
          hoverBorderColor: '{primary.color}',
        },
      },
      dark: {
        formField: {
          hoverBorderColor: '{primary.color}',
        },
      },
    },
  },

  components: {
    inputText: {
      size: {
        sm: {
          fontSize: '0.875rem',           // 14px
          padding: '0.375rem 0.5rem',     // 6px 8px
          borderRadius: '0.25rem',        // 4px
          lineHeight: '1.25rem',
        },
        md: {
          fontSize: '1rem',               // 16px
          padding: '0.5rem 0.75rem',      // 8px 12px
          borderRadius: '0.375rem',       // 6px
          lineHeight: '1.5rem',
        },
        lg: {
          fontSize: '1.125rem',           // 18px
          padding: '0.75rem 1rem',        // 12px 16px
          borderRadius: '0.5rem',         // 8px
          lineHeight: '1.75rem',
        },
      },
    },

    dropdown: {
      size: {
        sm: {
          fontSize: '0.875rem',
          padding: '0.375rem 0.5rem',
          borderRadius: '0.25rem',
          triggerPadding: '0.375rem 0.5rem',
        },
        md: {
          fontSize: '1rem',
          padding: '0.5rem 0.75rem',
          borderRadius: '0.375rem',
          triggerPadding: '0.5rem 0.75rem',
        },
        lg: {
          fontSize: '1.125rem',
          padding: '0.75rem 1rem',
          borderRadius: '0.5rem',
          triggerPadding: '0.75rem 1rem',
        },
      },
    },
  }
});
