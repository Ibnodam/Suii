using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_2_Facade.Subsystems;


public class Screen
{
    public void Down() => Console.WriteLine("Экран: опущен");
    public void Up() => Console.WriteLine("Экран: поднят");
}