using System.ComponentModel.DataAnnotations;

namespace ManagementSystem.DTOs
{
    public class WorkerDTO
    {
        public int WorkerId { get; set; }
        public string WorkersName { get; set; }
        public string WorkersSurnname { get; set; }
        public string WorkersPhoneNumber { get; set; }
        public string WorkersEmail { get; set; }
        public string WorkersCity { get; set; }
        public string WorkersAddress { get; set; }
    }
}
