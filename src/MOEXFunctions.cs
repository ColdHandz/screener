using System;

namespace screener {
    class MOEX {
        public static string allStockSharesSecstatsURL = "https://iss.moex.com/iss/engines/stock/markets/shares/secstats.json";
        public static string stockMarketsURL = "https://iss.moex.com/iss/engines/stock/markets.json";
        public static dynamic getAllStocks() {
            var ScreenerData = JSON.StringToObject(Requests.Get(allStockSharesSecstatsURL));

            Console.WriteLine(ScreenerData);
            Console.WriteLine(ScreenerData.GetType());

            return JSON.JsonToString(ScreenerData);
        }
        // TODO найти все акции
        // TODO перебрать их и добавить к ним всю возможную информацию (например с /card/info)
    }
}