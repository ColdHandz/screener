namespace screener {
    class MOEX {
        public void getAllStocks() {
            Requests.Get("https://iss.moex.com/iss/engines/stock/markets/shares/secstats.json");
        }
    }
}