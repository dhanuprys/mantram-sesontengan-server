<?php

namespace App\Filament\Resources\MantramBaseResource\Pages;

use App\Filament\Resources\MantramBaseResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditMantramBase extends EditRecord
{
    protected static string $resource = MantramBaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
