<?php

namespace App\Filament\Resources\MantramResource\Pages;

use App\Filament\Resources\MantramResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListMantrams extends ListRecords
{
    protected static string $resource = MantramResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
