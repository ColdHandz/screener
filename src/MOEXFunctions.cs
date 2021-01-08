using System;

namespace screener {
    class MOEX {
        public static string allStockSharesSecstatsURL = "https://iss.moex.com/iss/engines/stock/markets/shares/secstats.json";
        public static string stockMarketsURL = "https://iss.moex.com/iss/engines/stock/markets.json";
        public static dynamic getAllStocks() {
            var ScreenerData = JSON.StringToObject(Requests.Get(stockMarketsURL));

            Console.WriteLine(ScreenerData);
            Console.WriteLine(ScreenerData.GetType());
            Console.WriteLine(ScreenerData["markets"]["data"]);

            return JSON.JsonToString(ScreenerData);
        }
    }
}