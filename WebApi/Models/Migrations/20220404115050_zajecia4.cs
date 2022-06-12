using Microsoft.EntityFrameworkCore.Migrations;

namespace Models.Migrations
{
    public partial class zajecia4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_BasketItems_BasketItemId",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_Users_BasketItems_BasketItemId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Users_BasketItemId",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Products_BasketItemId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "BasketItemId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "BasketItemId",
                table: "Products");

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_ProductId",
                table: "BasketItems",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_BasketItems_UserId",
                table: "BasketItems",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_Products_ProductId",
                table: "BasketItems",
                column: "ProductId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BasketItems_Users_UserId",
                table: "BasketItems",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_Products_ProductId",
                table: "BasketItems");

            migrationBuilder.DropForeignKey(
                name: "FK_BasketItems_Users_UserId",
                table: "BasketItems");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_ProductId",
                table: "BasketItems");

            migrationBuilder.DropIndex(
                name: "IX_BasketItems_UserId",
                table: "BasketItems");

            migrationBuilder.AddColumn<int>(
                name: "BasketItemId",
                table: "Users",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "BasketItemId",
                table: "Products",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_BasketItemId",
                table: "Users",
                column: "BasketItemId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_BasketItemId",
                table: "Products",
                column: "BasketItemId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_BasketItems_BasketItemId",
                table: "Products",
                column: "BasketItemId",
                principalTable: "BasketItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Users_BasketItems_BasketItemId",
                table: "Users",
                column: "BasketItemId",
                principalTable: "BasketItems",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
