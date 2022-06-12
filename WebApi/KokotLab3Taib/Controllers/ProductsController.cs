using Microsoft.AspNetCore.Mvc;
using Services;
using Services.DTO;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService productsService;

        public ProductsController(IProductsService productsService)
        {
            this.productsService = productsService;
        }

        [HttpGet("{productId}")]
        public ProductDto GetById(int productId)
          => this.productsService.GetById(productId);

        [HttpGet]
        public PaginatedData<ProductDto> Get([FromQuery] PaginationDto dto)
            => this.productsService.Get(dto);

        [HttpPut]
        public ProductDto Put(int productId, PostProductDto dto)
            => this.productsService.Put(productId, dto);

        [HttpPost]
        public ProductDto Post([FromBody] PostProductDto dto)
            => this.productsService.Post(dto);

        [HttpDelete("{productId}")]
        public bool Delete(int productId)
            => this.productsService.Delete(productId);
    }
}
