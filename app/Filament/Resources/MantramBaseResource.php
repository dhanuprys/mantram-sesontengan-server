<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MantramBaseResource\Pages;
use App\Filament\Resources\MantramBaseResource\RelationManagers;
use App\Models\MantramBase;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MantramBaseResource extends Resource
{
    protected static ?string $model = MantramBase::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function getLabel(): ?string {
        return 'Jenis Mantram';
    }

    public static function getPluralLabel(): ?string {
        return 'Jenis Mantram';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                                            ->label('Jenis mantra')
                                            ->maxLength(255)
                                            ->required()
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                                            ->searchable()
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMantramBases::route('/'),
            'create' => Pages\CreateMantramBase::route('/create'),
            'edit' => Pages\EditMantramBase::route('/{record}/edit'),
        ];
    }
}
