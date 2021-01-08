using Microsoft.AspNetCore.Mvc;

namespace screener {
    [Route("/moex/getallstocks")]
    public class MOEXRoute : Controller {
        [HttpGet]
        public dynamic Test() {
            return MOEX.getAllStocks();
        }
    }
    [Route("/test")]
    public class TestRoute : Controller {
        [HttpGet]
        public dynamic Test() {
            return "Hello World";
        }
    }
    [Route("/json")]
    public class JsonRoute : Controller {
        [HttpGet]
        public dynamic Test() {
            return new { title = "Hello World" };
        }
    }
    // [Route("{*.}")]
    // public class AllRoutes : Controller {
    //     [HttpGet]
    //     public void Routes() {
    //         Response.Headers.Add("X-Stuff", "stuff");
    //     }
    // }
}