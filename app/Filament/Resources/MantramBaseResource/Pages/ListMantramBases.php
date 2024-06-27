<?php

namespace App\Filament\Resources\MantramBaseResource\Pages;

use App\Filament\Resources\MantramBaseResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMantramBases extends ListRecords
{
    protected static string $resource = MantramBaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
