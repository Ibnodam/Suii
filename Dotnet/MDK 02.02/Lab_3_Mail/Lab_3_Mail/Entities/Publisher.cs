using Lab_3_Mail.Observer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_3_Mail.Entities;


public class Publisher
{
    private readonly IPublisher _mailOffice;

    public Publisher(IPublisher mailOffice)
    {
        _mailOffice = mailOffice;
    }

    public void Publish(PrintEdition edition)
    {
        Console.WriteLine($"Издательство: выпущено издание '{edition.Title}'");
        _mailOffice.Notify(edition);
    }
}
