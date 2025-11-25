using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_2_Facade.Subsystems;

public class Tuner
{
    public void On() => Console.WriteLine("Тюнер: включён");
    public void Off() => Console.WriteLine("Тюнер: выключен");
}