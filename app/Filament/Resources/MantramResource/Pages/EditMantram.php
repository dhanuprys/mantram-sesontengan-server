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

    protected function mutateFormDataBeforeSave(array $data): array
    {
       $data['version'] = isset($data['version']) ? $data['version'] + 1 : 1;

        return $data;
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
