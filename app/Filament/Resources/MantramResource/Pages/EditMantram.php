<?php

namespace App\Filament\Resources\MantramResource\Pages;

use App\Filament\Resources\MantramResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditMantram extends EditRecord
{
    protected static string $resource = MantramResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
