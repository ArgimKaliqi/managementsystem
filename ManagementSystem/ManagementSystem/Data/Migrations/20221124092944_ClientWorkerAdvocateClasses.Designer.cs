// <auto-generated />
using System;
using ManagementSystem.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ManagementSystem.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221124092944_ClientWorkerAdvocateClasses")]
    partial class ClientWorkerAdvocateClasses
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("ManagementSystem.Entities.Advocate", b =>
                {
                    b.Property<int>("AdvocatesId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("AdvocatesAddress")
                        .HasColumnType("TEXT");

                    b.Property<string>("AdvocatesCity")
                        .HasColumnType("TEXT");

                    b.Property<string>("AdvocatesName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("AdvocatesPhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<string>("AdvocatesSurname")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("AdvocatesId");

                    b.ToTable("Advocates");
                });

            modelBuilder.Entity("ManagementSystem.Entities.Appuser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("ManagementSystem.Entities.Client", b =>
                {
                    b.Property<int>("ClientsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("AdvocateId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ClientsAddres")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClientsCity")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClientsName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("ClientsPhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<string>("ClientsSurname")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("DoorNumber")
                        .HasColumnType("INTEGER");

                    b.Property<int>("HouseNumber")
                        .HasColumnType("INTEGER");

                    b.Property<int>("StairNumber")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("WorkerId")
                        .HasColumnType("INTEGER");

                    b.HasKey("ClientsId");

                    b.HasIndex("AdvocateId");

                    b.HasIndex("WorkerId");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("ManagementSystem.Entities.Worker", b =>
                {
                    b.Property<int>("WorkerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("WorkersAddress")
                        .HasColumnType("TEXT");

                    b.Property<string>("WorkersCity")
                        .HasColumnType("TEXT");

                    b.Property<string>("WorkersEmail")
                        .HasColumnType("TEXT");

                    b.Property<string>("WorkersName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("WorkersPhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<string>("WorkersSurnname")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("WorkerId");

                    b.ToTable("Workers");
                });

            modelBuilder.Entity("ManagementSystem.Entities.Client", b =>
                {
                    b.HasOne("ManagementSystem.Entities.Advocate", "Advocate")
                        .WithMany()
                        .HasForeignKey("AdvocateId");

                    b.HasOne("ManagementSystem.Entities.Worker", "Worker")
                        .WithMany()
                        .HasForeignKey("WorkerId");

                    b.Navigation("Advocate");

                    b.Navigation("Worker");
                });
#pragma warning restore 612, 618
        }
    }
}
