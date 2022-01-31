const format = (date: Date, locale: string, options:any) => new Intl.DateTimeFormat(locale, options).format(date);
export default format;