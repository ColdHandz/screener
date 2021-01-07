using Microsoft.AspNetCore.Mvc;

namespace screener {
    // [Route("{*.}")]
    // public class AllRoutes : Controller {
    //     [HttpGet]
    //     public void Routes() {
    //         Response.Headers.Add("X-Stuff", "stuff");
    //     }
    // }
    [Route("/moex/moex")]
    public class MOEXRoute : Controller {
        [HttpGet]
        public dynamic Test() {
            MOEX.getAllStocks();
            return "Hello World";
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
}