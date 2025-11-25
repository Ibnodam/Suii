using RPG.Builder;
using RPG.Prototype;

Console.WriteLine("=== Демонстрация порождающих паттернов ===");

// Тут Валиджон реализует прототип
var warrior = new WarriorPrototype { Name = "Базовый Воин", Strength = 10 };
var warriorCopy = warrior.Clone();
warriorCopy.Name = "Клон Воина";

Console.WriteLine($"Prototype: {warrior.Name}, {warrior.Strength}");
Console.WriteLine($"Prototype Clone: {warriorCopy.Name}, {warriorCopy.Strength}");

// Тут Валиджон реализует строителя
var builder = new CharacterBuilder();
var customHero = builder
    .SetName("Геральт")
    .SetClass("Ведьмак")
    .SetStrength(15)
    .Build();

Console.WriteLine($"Builder: {customHero.Name}, {customHero.Class}, {customHero.Strength}");

// Тут Валиджон строит прототип
var mageTemplate = new MagePrototype { Name = "Стандартный Маг", Strength = 5 };
var newMage = mageTemplate.Clone();

var modifiedMage = new CharacterBuilder()
    .SetName(newMage.Name + " (усиленный)")
    .SetClass("Маг")
    .SetStrength(newMage.Strength + 3)
    .Build();

Console.WriteLine($"Template + Modify: {modifiedMage.Name}, {modifiedMage.Class}, {modifiedMage.Strength}");