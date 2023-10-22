export function DateTimePretty(DateTime: React.FC<{elapsed: string}>, date: string) {
  return function () {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentYear = currentDate.getFullYear();

    const year = Number(date.slice(0, 4));
    const month = Number(date.slice(5, 7)) - 1;
    const day = Number(date.slice(8, 10));
    const hours = Number(date.slice(11, 13));
    const minutes = Number(date.slice(14, 16));
    const publicationDate = new Date(year, month, day, hours, minutes);
    const publicationMonth = publicationDate.getMonth() + 1;
    const publicationDay = publicationDate.getDate();
 
    let elapsed;
    const minutesInHour = 60;
    const minutesInDay = minutesInHour * 24;
    const elapsedMinutes = Math.round((currentDate.getTime() - publicationDate.getTime()) / (1000 * 60));
    const elapsedDays = currentDay - publicationDay;
    const elapsedHours = Math.trunc(elapsedMinutes / minutesInHour);
    const elapsedYears = currentYear - year;
    let elapsedMonths;
    
    if (elapsedYears === 1) {
      elapsedMonths = (currentMonth + 12 - publicationMonth);
    } else {
      elapsedMonths = (currentMonth - publicationMonth);
    }
    
    function declOfNum(number: number, words: [string, string, string]): string {  
      return words[(number % 100 > 4 && number % 100 < 20) 
                    ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) 
                    ? Math.abs(number) % 10 : 5]];
    }

    if (currentMonth === publicationMonth && currentYear === year) {
      if (elapsedMinutes > minutesInDay) {
        elapsed = `${elapsedDays} ${declOfNum(elapsedDays, ['день', 'дня', 'дней'])} назад`;
      } else if (elapsedMinutes > minutesInHour) {
        elapsed = `${elapsedHours} ${declOfNum(elapsedHours, ['час', 'часа', 'часов'])} назад`; 
      } else {
        elapsed = `${elapsedMinutes} ${declOfNum(elapsedMinutes, ['минуту', 'минуты', 'минут'])} назад`;
      }
    } else if (elapsedMonths < 12 && elapsedYears <= 1) {
      elapsed = `${elapsedMonths} ${declOfNum(elapsedMonths, ['месяц', 'месяца', 'месяцев'])} назад`;
    } else {
      elapsed = `${elapsedYears} ${declOfNum(elapsedYears, ['год', 'года', 'лет'])} назад`;
    }

    return <DateTime elapsed={elapsed} />;
  }
}
