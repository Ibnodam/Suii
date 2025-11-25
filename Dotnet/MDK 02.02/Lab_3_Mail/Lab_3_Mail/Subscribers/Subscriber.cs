using Lab_3_Mail.Entities;
using Lab_3_Mail.Observer;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_3_Mail.Subscribers;


public class Subscriber : ISubscriber
{
    public string Name { get; }

    public Subscriber(string name)
    {
        Name = name;
    }

    public void Update(PrintEdition edition)
    {
        Console.WriteLine($"{Name} получил(а) издание: {edition.Title}");
    }
}