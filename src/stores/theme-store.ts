import { persistentAtom } from "@nanostores/persistent";

type Theme = "dark" | "light";

// --- Átomo Persistente ---
// Usamos persistentAtom para guardar el tema en localStorage bajo la clave 'nanotheme'
export const $theme = persistentAtom<Theme>('nanotheme', 'light', {
  encode: (val: Theme) => val,
  decode: (str: string): Theme => {
    // Validamos que el valor recuperado sea un tema válido
    if (str === 'dark' || str === 'light') {
      return str;
    }
    // Si no es válido, devolvemos el valor por defecto o un valor seguro
    return 'light'; // Valor por defecto si no se encuentra o es inválido
  }
});

// --- Función de Inicialización ---
// Esta función se llama una sola vez al inicio de la aplicación para
// aplicar el tema inicial (ya sea el del navegador, el persistido o el predeterminado)
// y escuchar cambios posteriores.
let isInitialized = false;

function initializeTheme() {
  if (isInitialized) return; // Previene múltiples inicializaciones
  isInitialized = true;

  // 1. Detectar preferencia del sistema (solo si no hay valor persistido aún)
  // Leemos directamente del localStorage para ver si ya hay un valor guardado
  const persistedTheme = localStorage.getItem('nanotheme');
  let initialTheme: Theme;

  if (persistedTheme) {
    // Si ya hay un valor persistido, lo usamos
    initialTheme = $theme.get(); // Ya validado por decode
  } else {
    // Si no hay valor persistido, intentamos usar la preferencia del sistema
    const prefersDark = typeof window !== 'undefined' && window.matchMedia("(prefers-color-scheme: dark)").matches;
    initialTheme = prefersDark ? "dark" : "light";
    // Y lo establecemos en el átomo para que se persista
    $theme.set(initialTheme);
  }

  // 2. Aplicar el tema inicial al DOM
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute("data-color-mode", initialTheme);
  }

  // 3. Escuchar cambios futuros en el átomo y aplicarlos al DOM
  $theme.listen((newTheme) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute("data-color-mode", newTheme);
    }
  });
}

// Exportamos la función para que pueda ser llamada en el punto de entrada de la app
export { initializeTheme };

// --- Funciones de Acción ---

/**
 * Alterna entre el tema oscuro y claro.
 */
export function toggleTheme(): void {
  const currentTheme = $theme.get();
  const newTheme: Theme = currentTheme === "light" ? "dark" : "light";
  $theme.set(newTheme);
  // La escucha en initializeTheme se encargará de aplicar el cambio al DOM
}

// --- Cómo usarlo en la aplicación ---
// 1. En el punto de entrada de tu aplicación (por ejemplo, App.tsx o _app.tsx en Next.js),
// debes llamar a initializeTheme() una vez al inicio.
//
// App.tsx (Ejemplo React):
// import { useEffect } from 'react';
// import { initializeTheme } from '@/stores/theme.store'; // Ajusta la ruta
//
// const App = ({ children }: { children: React.ReactNode }) => {
//   useEffect(() => {
//     initializeTheme(); // Llama la inicialización aquí
//   }, []);
//
//   return <>{children}</>;
// };
//
// 2. En componentes donde necesites el tema actual o quieras cambiarlo:
// import { useStore } from '@nanostores/react';
// import { $theme, toggleTheme } from '@/stores/theme.store';
//
// const ThemeToggleButton = () => {
//   const currentTheme = useStore($theme);
//
//   const handleClick = () => {
//     toggleTheme();
//   };
//
//   return (
//     <button onClick={handleClick}>
//       Switch to {currentTheme === 'light' ? 'Dark' : 'Light'} Mode
//     </button>
//   );
// };