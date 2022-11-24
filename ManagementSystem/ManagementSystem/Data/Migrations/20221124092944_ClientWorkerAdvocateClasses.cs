using Microsoft.EntityFrameworkCore.Migrations;

namespace ManagementSystem.Data.Migrations
{
    public partial class ClientWorkerAdvocateClasses : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Advocates",
                columns: table => new
                {
                    AdvocatesId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AdvocatesName = table.Column<string>(type: "TEXT", nullable: false),
                    AdvocatesSurname = table.Column<string>(type: "TEXT", nullable: false),
                    AdvocatesCity = table.Column<string>(type: "TEXT", nullable: true),
                    AdvocatesAddress = table.Column<string>(type: "TEXT", nullable: true),
                    AdvocatesPhoneNumber = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Advocates", x => x.AdvocatesId);
                });

            migrationBuilder.CreateTable(
                name: "Workers",
                columns: table => new
                {
                    WorkerId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    WorkersName = table.Column<string>(type: "TEXT", nullable: false),
                    WorkersSurnname = table.Column<string>(type: "TEXT", nullable: false),
                    WorkersPhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    WorkersEmail = table.Column<string>(type: "TEXT", nullable: true),
                    WorkersCity = table.Column<string>(type: "TEXT", nullable: true),
                    WorkersAddress = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Workers", x => x.WorkerId);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    ClientsId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientsName = table.Column<string>(type: "TEXT", nullable: false),
                    ClientsSurname = table.Column<string>(type: "TEXT", nullable: false),
                    ClientsPhoneNumber = table.Column<string>(type: "TEXT", nullable: true),
                    ClientsCity = table.Column<string>(type: "TEXT", nullable: true),
                    ClientsAddres = table.Column<string>(type: "TEXT", nullable: true),
                    HouseNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    DoorNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    StairNumber = table.Column<int>(type: "INTEGER", nullable: false),
                    WorkerId = table.Column<int>(type: "INTEGER", nullable: true),
                    AdvocateId = table.Column<int>(type: "INTEGER", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.ClientsId);
                    table.ForeignKey(
                        name: "FK_Clients_Advocates_AdvocateId",
                        column: x => x.AdvocateId,
                        principalTable: "Advocates",
                        principalColumn: "AdvocatesId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Clients_Workers_WorkerId",
                        column: x => x.WorkerId,
                        principalTable: "Workers",
                        principalColumn: "WorkerId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clients_AdvocateId",
                table: "Clients",
                column: "AdvocateId");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_WorkerId",
                table: "Clients",
                column: "WorkerId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Advocates");

            migrationBuilder.DropTable(
                name: "Workers");
        }
    }
}
