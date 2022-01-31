export interface IAsyncLocalStorageProps {
	getItem: (key: string) => any;
	setItem: (key: string, value: string) => any;
	removeItem: (key: string) => any;
};

export const asyncLocalStorage: IAsyncLocalStorageProps = {
	setItem: async (key: string, value: string) => {
		try {
			await Promise.resolve();
			window.localStorage.setItem(key, value);
		} catch (err) {
			throw err;
		}
	},
	getItem: async (key: string) => {
		try {
			await Promise.resolve();
			return window.localStorage.getItem(key);
		} catch (err) {
			throw err;
		}
	},
  removeItem: async (key: string) => {
    try {
      await Promise.resolve();
      window.localStorage.removeItem(key);
    } catch (err) {
      throw err;
    }
  },
};