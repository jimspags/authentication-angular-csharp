using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet("/")]
        public IActionResult HelloWorld()
        {
            return Ok(new { message = "Hello World" });
        }
    }
}
