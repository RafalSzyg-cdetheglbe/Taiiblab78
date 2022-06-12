using Microsoft.AspNetCore.Mvc;
using Services;
using Services.DTO;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUsersService usersService;

        public UsersController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        [HttpGet]
        public PaginatedData<UserDto> Get([FromQuery] PaginationDto dto)
            => this.usersService.Get(dto);

        [HttpPost]
        public UserDto Post(PostUserDto dto)
            => this.usersService.Post(dto);

    }
}
