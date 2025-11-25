using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_2_Facade.Subsystems;

public class Projector
{
    public void On() => Console.WriteLine("Проектор: включён");
    public void Off() => Console.WriteLine("Проектор: выключен");
}