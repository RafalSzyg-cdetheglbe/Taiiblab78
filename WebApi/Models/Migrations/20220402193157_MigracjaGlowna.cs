using Microsoft.EntityFrameworkCore.Migrations;

namespace Models.Migrations
{
    public partial class MigracjaGlowna : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "BasketItems",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "BasketItems",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "BasketItems");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "BasketItems");
        }
    }
}
