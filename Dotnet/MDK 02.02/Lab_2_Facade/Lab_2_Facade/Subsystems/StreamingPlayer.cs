using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lab_2_Facade.Subsystems;

public class StreamingPlayer
{
    public void Play(string movie) =>
        Console.WriteLine($"Плеер: проигрывает \"{movie}\"");

    public void Stop() =>
        Console.WriteLine("Плеер: остановлен");
}