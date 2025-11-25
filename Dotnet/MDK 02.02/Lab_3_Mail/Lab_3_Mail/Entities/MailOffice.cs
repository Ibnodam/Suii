using Lab_3_Mail.Observer;
using Lab_3_Mail.Subscribers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_3_Mail.Entities;


public class MailOffice : IPublisher
{
    private readonly List<ISubscriber> _subscribers = new();

    public void Attach(ISubscriber subscriber)
    {
        _subscribers.Add(subscriber);
        Console.WriteLine($"Подписчик {((Subscriber)subscriber).Name} подписан на почтовое отделение.");
    }

    public void Detach(ISubscriber subscriber)
    {
        _subscribers.Remove(subscriber);
        Console.WriteLine($"Подписчик {((Subscriber)subscriber).Name} отписан от почтового отделения.");
    }

    public void Notify(PrintEdition edition)
    {
        foreach (var sub in _subscribers)
        {
            sub.Update(edition);
        }
    }
}