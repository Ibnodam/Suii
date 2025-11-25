using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_2_Facade.Subsystems;

public class Amplifier
{
    public void On() => Console.WriteLine("Усилитель: включён");
    public void Off() => Console.WriteLine("Усилитель: выключен");
}