using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_3_Mail.Entities;

public class PrintEdition
{
    public string Title { get; }

    public PrintEdition(string title)
    {
        Title = title;
    }
}