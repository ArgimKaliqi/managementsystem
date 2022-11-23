using Microsoft.EntityFrameworkCore.Migrations;

namespace ManagementSystem.Data.Migrations
{
    public partial class InitialCreateCoWorkers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "CoWorkers");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CoWorkers",
                table: "CoWorkers",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CoWorkers",
                table: "CoWorkers");

            migrationBuilder.RenameTable(
                name: "CoWorkers",
                newName: "Users");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");
        }
    }
}
