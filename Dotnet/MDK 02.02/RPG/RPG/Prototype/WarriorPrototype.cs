using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RPG.Prototype;

public class WarriorPrototype : CharacterPrototype
{
    public override CharacterPrototype Clone()
    {
        return new WarriorPrototype
        {
            Name = this.Name,
            Strength = this.Strength
        };
    }
}