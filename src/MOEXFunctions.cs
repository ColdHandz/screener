using System;

namespace screener {
    class MOEX {
        public string allStockSharesSecstatsURL = "https://iss.moex.com/iss/engines/stock/markets/shares/secstats.json";
        public static void getAllStocks() {
            var ScreenerData = JSON.StringToObject(
                // Requests.Get(allStockSharesSecstatsURL)
                Requests.Get("https://iss.moex.com/iss/engines/stock/markets.json")
            );

            Console.WriteLine(ScreenerData["markets"]);
        }
    }
}