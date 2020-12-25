using Microsoft.AspNetCore.Mvc;

namespace screener {
    // [Route("{*.}")]
    // public class AllRoutes : Controller {
    //     [HttpGet]
    //     public dynamic Index() {
    //         return File("/public/index.html", "text/html");
    //     }
    // }
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