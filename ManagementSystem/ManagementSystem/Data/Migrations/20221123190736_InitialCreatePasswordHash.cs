using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ManagementSystem.Data.Migrations
{
    public partial class InitialCreatePasswordHash : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_CoWorkers",
                table: "CoWorkers");

            migrationBuilder.RenameTable(
                name: "CoWorkers",
                newName: "Users");

            migrationBuilder.RenameColumn(
                name: "UserName",
                table: "Users",
                newName: "Username");

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordHash",
                table: "Users",
                type: "BLOB",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordSalt",
                table: "Users",
                type: "BLOB",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PasswordHash",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "PasswordSalt",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "CoWorkers");

            migrationBuilder.RenameColumn(
                name: "Username",
                table: "CoWorkers",
                newName: "UserName");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CoWorkers",
                table: "CoWorkers",
                column: "Id");
        }
    }
}
