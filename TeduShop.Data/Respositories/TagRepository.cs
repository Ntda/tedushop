using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeduShop.Data.Respositories
{
    class TagRepository
    {
    }
    public interface ITagRepository
    {
    }

    public class SystemConfigRepository : RepositoryBase<Product>, ITagRepository
    {
        public SystemConfigRepository(IDbFactory dbFactory) : base(dbFactory)
        {
        }
    }
}
