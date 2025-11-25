using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPG.Prototype;

public class ArcherPrototype : CharacterPrototype
{
    public override CharacterPrototype Clone()
    {
        return new ArcherPrototype
        {
            Name = this.Name,
            Strength = this.Strength
        };
    }
}