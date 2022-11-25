using Microsoft.EntityFrameworkCore.Migrations;

namespace ManagementSystem.Data.Migrations
{
    public partial class UpdatesInDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Clients",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "WorkersAddress",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "WorkersCity",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "WorkersEmail",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "WorkersPhoneNumber",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "ClientsAddres",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "ClientsCity",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "AdvocatesAddress",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "AdvocatesCity",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "AdvocatesPhoneNumber",
                table: "Advocates");

            migrationBuilder.RenameColumn(
                name: "WorkersSurnname",
                table: "Workers",
                newName: "SwiftCode");

            migrationBuilder.RenameColumn(
                name: "WorkersName",
                table: "Workers",
                newName: "Street");

            migrationBuilder.RenameColumn(
                name: "StairNumber",
                table: "Clients",
                newName: "Status");

            migrationBuilder.RenameColumn(
                name: "ClientsSurname",
                table: "Clients",
                newName: "SwiftCode");

            migrationBuilder.RenameColumn(
                name: "ClientsPhoneNumber",
                table: "Clients",
                newName: "Disease");

            migrationBuilder.RenameColumn(
                name: "ClientsName",
                table: "Clients",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "ClientsId",
                table: "Clients",
                newName: "StairsNumber");

            migrationBuilder.RenameColumn(
                name: "AdvocatesSurname",
                table: "Advocates",
                newName: "SwiftCode");

            migrationBuilder.RenameColumn(
                name: "AdvocatesName",
                table: "Advocates",
                newName: "Street");

            migrationBuilder.RenameColumn(
                name: "AdvocatesId",
                table: "Advocates",
                newName: "AdvocateId");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Bank",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CivilStatus",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DoorNumber",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Gender",
                table: "Workers",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "HouseNumber",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "IBAN",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Postal",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "Salary",
                table: "Workers",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<string>(
                name: "StairsNumber",
                table: "Workers",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<int>(
                name: "StairsNumber",
                table: "Clients",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .OldAnnotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<int>(
                name: "ClientId",
                table: "Clients",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0)
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Bank",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CivilStatus",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "Gender",
                table: "Clients",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "IBAN",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Postal",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "AdministrativeTax",
                table: "Advocates",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Bank",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CivilStatus",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "DoorNumber",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "HouseNumber",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "IBAN",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "IsDisabled",
                table: "Advocates",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LastName",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Postal",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<long>(
                name: "Salary",
                table: "Advocates",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StairsNumber",
                table: "Advocates",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Clients",
                table: "Clients",
                column: "ClientId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Clients",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "Bank",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "CivilStatus",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "DoorNumber",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "HouseNumber",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "IBAN",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "Postal",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "Salary",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "StairsNumber",
                table: "Workers");

            migrationBuilder.DropColumn(
                name: "ClientId",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Bank",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "CivilStatus",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "IBAN",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Postal",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "Address",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "AdministrativeTax",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "Bank",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "CivilStatus",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "DoorNumber",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "Gender",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "HouseNumber",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "IBAN",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "IsDisabled",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "LastName",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "Location",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "Postal",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "Salary",
                table: "Advocates");

            migrationBuilder.DropColumn(
                name: "StairsNumber",
                table: "Advocates");

            migrationBuilder.RenameColumn(
                name: "SwiftCode",
                table: "Workers",
                newName: "WorkersSurnname");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "Workers",
                newName: "WorkersName");

            migrationBuilder.RenameColumn(
                name: "SwiftCode",
                table: "Clients",
                newName: "ClientsSurname");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Clients",
                newName: "ClientsName");

            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Clients",
                newName: "StairNumber");

            migrationBuilder.RenameColumn(
                name: "StairsNumber",
                table: "Clients",
                newName: "ClientsId");

            migrationBuilder.RenameColumn(
                name: "Disease",
                table: "Clients",
                newName: "ClientsPhoneNumber");

            migrationBuilder.RenameColumn(
                name: "SwiftCode",
                table: "Advocates",
                newName: "AdvocatesSurname");

            migrationBuilder.RenameColumn(
                name: "Street",
                table: "Advocates",
                newName: "AdvocatesName");

            migrationBuilder.RenameColumn(
                name: "AdvocateId",
                table: "Advocates",
                newName: "AdvocatesId");

            migrationBuilder.AddColumn<string>(
                name: "WorkersAddress",
                table: "Workers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WorkersCity",
                table: "Workers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WorkersEmail",
                table: "Workers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WorkersPhoneNumber",
                table: "Workers",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ClientsId",
                table: "Clients",
                type: "INTEGER",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "INTEGER")
                .Annotation("Sqlite:Autoincrement", true);

            migrationBuilder.AddColumn<string>(
                name: "ClientsAddres",
                table: "Clients",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ClientsCity",
                table: "Clients",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AdvocatesAddress",
                table: "Advocates",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AdvocatesCity",
                table: "Advocates",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "AdvocatesPhoneNumber",
                table: "Advocates",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Clients",
                table: "Clients",
                column: "ClientsId");
        }
    }
}
