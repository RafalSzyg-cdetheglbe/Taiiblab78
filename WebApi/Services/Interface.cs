﻿using Services.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public interface IAuthorizationService
    {
        public int Login(AuthorizationDto dto);
    }
    public interface IProductsService
    {
        public ProductDto GetById(int id);
        public PaginatedData<ProductDto> Get(PaginationDto dto);
        public ProductDto Put(int productId, PostProductDto dto);
        public ProductDto Post(PostProductDto dto);
        public bool Delete(int productId);
        
    }
    public interface IBasketService
    {
        public IEnumerable<BasketItemDto> Get();
        public IEnumerable<BasketItemDto> Post(int productId, int count);
        public IEnumerable<BasketItemDto> Put(int basketItemId, int count);
        public IEnumerable<BasketItemDto> Delete(int basketItemId);
        public bool Clear();
    }
    public interface IUsersService
    {
        public PaginatedData<UserDto> Get(PaginationDto dto);
        public UserDto Post(PostUserDto dto);
    }
}
