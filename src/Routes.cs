using Microsoft.AspNetCore.Mvc;

namespace screener {
    [Route("/")]
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
            return new {
                nesting = new {
                    title = "Hello World"
                }
            };
        }
    }
}