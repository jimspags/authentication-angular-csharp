using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Database
{
    public class AutomationDbContext : IdentityDbContext
    {
        public AutomationDbContext(DbContextOptions<AutomationDbContext> options) : base(options)
        {
            
        }
    }
}
