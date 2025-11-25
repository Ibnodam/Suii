using Lab_3_Mail.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_3_Mail.Observer;


public interface IPublisher
{
    void Attach(ISubscriber subscriber);
    void Detach(ISubscriber subscriber);
    void Notify(PrintEdition edition);
}