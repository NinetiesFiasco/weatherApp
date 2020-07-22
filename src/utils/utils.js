// Вернуть направление ветра по градусам от 0 до 360
export const windDirrection = (d) => {
  if (d < 22.5 || d > 337.5)
    return "Северный";
  else if ( d >= 22.5  && d < 67.5)
    return "Северо-западный";
  else if ( d >= 67.5  && d < 112.5)
    return "Восточный";
  else if ( d >= 112.5 && d < 157.5)
    return "Юго-восточный";
  else if ( d >= 157.5 && d < 202.5)
    return "Южный";
  else if ( d >= 202.5 && d < 247.5)
    return "Юго-западный";
  else if ( d >= 247.5 && d < 292.5)
    return "Западный";
  else if ( d >= 292.5 && d < 337.5)
    return "Северо-западный";
}

// Преобразование температуры из кельвинов в цельсии 
export const formatTemp = (temp) => parseInt(temp - 273)+"℃";

// Установка первых нулей при форматировании времени
export const fZero = (val) => val<10?'0'+val:val;

// Преобразование объекта даты во время в формате hh:mm:ss
export const timeFromDate = (_date) => {
  const date = new Date(_date);
  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();
  return  fZero(h) + ":" + fZero(m) + ":" + fZero(s);
}

